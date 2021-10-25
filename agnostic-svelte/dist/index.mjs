function noop() { }
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while (low < high) {
        const mid = low + ((high - low) >> 1);
        if (key(mid) <= value) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init)
        return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached
    const children = target.childNodes;
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */
    // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        const seqLen = upper_bound(1, longest + 1, idx => children[m[idx]].claim_order, current) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (; last >= cur; last--) {
            toMove.push(children[last]);
        }
        last--;
    }
    for (; last >= 0; last--) {
        toMove.push(children[last]);
    }
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    // Finally, we move the nodes
    for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
            j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
    }
}
function append(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentElement !== target))) {
            target.actual_end_child = target.firstChild;
        }
        if (node !== target.actual_end_child) {
            target.insertBefore(node, target.actual_end_child);
        }
        else {
            target.actual_end_child = node.nextSibling;
        }
    }
    else if (node.parentNode !== target) {
        target.appendChild(node);
    }
}
function insert(target, node, anchor) {
    if (is_hydrating && !anchor) {
        append(target, node);
    }
    else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
    }
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        // @ts-ignore
        callbacks.slice().forEach(fn => fn.call(this, event));
    }
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : options.context || []),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

/* src/stories/Button.svelte generated by Svelte v3.39.0 */

function add_css$b() {
	var style = element("style");
	style.id = "svelte-ot6kwu-style";
	style.textContent = ".btn-base.svelte-ot6kwu,.btn.svelte-ot6kwu{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;user-select:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnostic-timing-medium)}.btn-skin.svelte-ot6kwu,.btn.svelte-ot6kwu{color:var(--agnostic-btn-font-color, var(--agnostic-dark));background-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;border-width:var(--agnostic-btn-border-size, 1px);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);padding-block-start:var(--agnostic-vertical-pad, 0.5rem);padding-block-end:var(--agnostic-vertical-pad, 0.5rem);padding-inline-start:var(--agnostic-side-padding, 0.75rem);padding-inline-end:var(--agnostic-side-padding, 0.75rem);text-decoration:none;text-align:center;outline:none}.btn.svelte-ot6kwu:visited{color:var(--agnostic-btn-font-color, var(--agnostic-dark))}.btn.svelte-ot6kwu:hover{opacity:0.85;text-decoration:none}.btn.svelte-ot6kwu:active{text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.2)}.btn.svelte-ot6kwu:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnostic-timing-fast) ease-out}.btn.disabled.svelte-ot6kwu,.btn.svelte-ot6kwu:disabled{top:0 !important;background:var(\n      --agnostic-btn-disabled-bg,\n      var(--agnostic-gray-mid-dark)\n    ) !important;text-shadow:0 1px 1px rgba(255, 255, 255, 1) !important;border-color:transparent;color:var(\n      --agnostic-btn-disabled-color,\n      var(--agnostic-gray-dark)\n    ) !important;cursor:default !important;appearance:none !important;box-shadow:none !important;opacity:0.8 !important}.btn-primary.svelte-ot6kwu{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));border-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.btn-bordered.svelte-ot6kwu{color:var(--agnostic-btn-primary, var(--agnostic-primary))}.btn-primary.btn-bordered.svelte-ot6kwu:hover,.btn-primary.btn-bordered.svelte-ot6kwu:focus{background-color:var(--agnostic-btn-primary, var(--agnostic-primary));color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-primary.svelte-ot6kwu:visited{color:var(--agnostic-btn-primary-color, var(--agnostic-light))}.btn-secondary.svelte-ot6kwu{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));border-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.btn-bordered.svelte-ot6kwu{color:var(--agnostic-btn-secondary, var(--agnostic-secondary))}.btn-secondary.btn-bordered.svelte-ot6kwu:hover,.btn-secondary.btn-bordered.svelte-ot6kwu:focus{background-color:var(--agnostic-btn-secondary, var(--agnostic-secondary));color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-secondary.svelte-ot6kwu:visited{color:var(--agnostic-btn-secondary-color, var(--agnostic-light))}.btn-raised.svelte-ot6kwu{border-color:var(--agnostic-btn-bgcolor, var(--agnostic-gray-light));border-style:solid;background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(#f6f6f6),\n      to(#e1e1e1)\n    );background:linear-gradient(\n      var(--agnostic-btn-raised-from, var(--agnostic-gray-mid)),\n      var(--agnostic-btn-raised-to, var(--agnostic-gray-extra-light))\n    );-webkit-box-shadow:inset 0px 1px 0px rgba(255, 255, 255, 0.3),\n      0 1px 2px rgba(0, 0, 0, 0.15);box-shadow:inset 0px 1px 0px rgba(255, 255, 255, 0.3),\n      0 1px 2px rgba(0, 0, 0, 0.15)}.btn-raised.svelte-ot6kwu:hover,.btn-raised.svelte-ot6kwu:focus{background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(white),\n      to(gainsboro)\n    );background:linear-gradient(to bottom, white, gainsboro)}.btn-raised.active.svelte-ot6kwu{background:#eeeeee;-webkit-box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white}.btn-raised.btn-primary.svelte-ot6kwu{border-color:var(\n      --agnostic-btn-primary-raised-to,\n      var(--agnostic-primary-from)\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from))\n      ),\n      to(var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to)))\n    );background:linear-gradient(\n      var(--agnostic-btn-primary-raised-from, var(--agnostic-primary-from)),\n      var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-to))\n    )}.btn-raised.btn-primary.svelte-ot6kwu:hover,.btn-raised.btn-primary.svelte-ot6kwu:focus{background:linear-gradient(\n      to bottom,\n      var(\n        --agnostic-btn-primary-raised-hover-from,\n        var(--agnostic-primary-hover)\n      ),\n      var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from))\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnostic-btn-primary-raised-hover-from,\n          var(--agnostic-primary-hover)\n        )\n      ),\n      to(var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from)))\n    );background:linear-gradient(\n      var(\n        --agnostic-btn-primary-raised-hover-from,\n        var(--agnostic-primary-hover)\n      ),\n      var(--agnostic-btn-primary-raised-to, var(--agnostic-primary-from))\n    )}.btn-raised.btn-primary.svelte-ot6kwu:active,.btn-raised.btn-primary.active.svelte-ot6kwu{opacity:0.9;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.3)}.btn-raised.btn-secondary.svelte-ot6kwu{border-color:var(\n      --agnostic-btn-secondary-raised-to,\n      var(--agnostic-secondary-to)\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnostic-btn-secondary-raised-from,\n          var(--agnostic-secondary-from)\n        )\n      ),\n      to(var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))\n    );background:linear-gradient(\n      var(--agnostic-btn-secondary-raised-from, var(--agnostic-secondary-from)),\n      var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to))\n    )}.btn-raised.btn-secondary.svelte-ot6kwu:hover,.btn-raised.btn-secondary.svelte-ot6kwu:focus{background:linear-gradient(\n      to bottom,\n      var(\n        --agnostic-btn-secondary-raised-hover-from,\n        var(--agnostic-secondary-hover)\n      ),\n      var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to))\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnostic-btn-secondary-raised-hover-from,\n          var(--agnostic-secondary-hover)\n        )\n      ),\n      to(var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to)))\n    );background:linear-gradient(\n      var(\n        --agnostic-btn-secondary-raised-hover-from,\n        var(--agnostic-secondary-hover)\n      ),\n      var(--agnostic-btn-secondary-raised-to, var(--agnostic-secondary-to))\n    )}.btn-raised.btn-secondary.svelte-ot6kwu:active,.btn-raised.btn-secondary.active.svelte-ot6kwu{opacity:0.9;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.3)}.btn-bordered.svelte-ot6kwu{border-width:1px;background:transparent}.btn-large.svelte-ot6kwu{font-size:calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small.svelte-ot6kwu{font-size:calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded.svelte-ot6kwu{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, 0.25rem))}.btn-pill.svelte-ot6kwu{border-radius:200px}.btn-circle.svelte-ot6kwu{border-radius:100%;width:2.5rem;height:2.5rem;padding:0 !important}.btn-circle-large.svelte-ot6kwu{font-size:calc(var(--agnostic-btn-font-size, 1rem) + 0.25rem);width:3rem;height:3rem}.btn-circle-small.svelte-ot6kwu{font-size:calc(var(--agnostic-btn-font-size, 1rem) - 0.25rem);width:2rem;height:2rem}.btn-block.svelte-ot6kwu{width:100%}.btn-block-following.svelte-ot6kwu{margin-block-start:-1px}.btn-blank.svelte-ot6kwu{background-color:transparent;border:0;border-radius:0;box-shadow:none}.btn-blank.svelte-ot6kwu:hover,.btn-blank.svelte-ot6kwu:active,.btn-blank.svelte-ot6kwu:focus{background:none;outline:3px solid transparent}";
	append(document.head, style);
}

function create_fragment$b(ctx) {
	let button;
	let button_class_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[16].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	return {
		c() {
			button = element("button");
			if (default_slot) default_slot.c();
			attr(button, "type", /*type*/ ctx[3]);
			attr(button, "class", button_class_value = "" + (null_to_empty(/*klasses*/ ctx[4]) + " svelte-ot6kwu"));
			attr(button, "role", /*role*/ ctx[1]);
			attr(button, "aria-selected", /*ariaSelected*/ ctx[2]);
			button.disabled = /*isDisabled*/ ctx[0];
		},
		m(target, anchor) {
			insert(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(button, "click", /*click_handler*/ ctx[17]),
					listen(button, "focus", /*focus_handler*/ ctx[18]),
					listen(button, "blur", /*blur_handler*/ ctx[19])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32768)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[15], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*type*/ 8) {
				attr(button, "type", /*type*/ ctx[3]);
			}

			if (!current || dirty & /*klasses*/ 16 && button_class_value !== (button_class_value = "" + (null_to_empty(/*klasses*/ ctx[4]) + " svelte-ot6kwu"))) {
				attr(button, "class", button_class_value);
			}

			if (!current || dirty & /*role*/ 2) {
				attr(button, "role", /*role*/ ctx[1]);
			}

			if (!current || dirty & /*ariaSelected*/ 4) {
				attr(button, "aria-selected", /*ariaSelected*/ ctx[2]);
			}

			if (!current || dirty & /*isDisabled*/ 1) {
				button.disabled = /*isDisabled*/ ctx[0];
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$b($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { mode = "" } = $$props;
	let { size = "" } = $$props;
	let { isBordered = false } = $$props;
	let { isBlock = false } = $$props;
	let { isBlank = false } = $$props;
	let { isDisabled = undefined } = $$props;
	let { role = undefined } = $$props;
	let { isRaised = false } = $$props;
	let { isCircle = false } = $$props;
	let { isRounded = false } = $$props;
	let { isSkinned = true } = $$props;
	let { ariaSelected = undefined } = $$props;
	let { css = "" } = $$props;
	let { type = "button" } = $$props;

	// ******************** HEY! ************************
	// You will need to also add these to the buttonslot:
	// agnostic-svelte/src/stories/ButtonSlot.svelte
	let klasses = [
		isSkinned ? "btn" : "btn-base",
		mode ? `btn-${mode}` : "",
		size ? `btn-${size}` : "",
		isBordered ? "btn-bordered" : "",
		isBlock ? "btn-block" : "",
		isCircle ? "btn-circle" : "",
		isRounded ? "btn-rounded" : "",
		isDisabled ? "disabled" : "",
		isRaised ? "btn-raised" : "",
		isBlank ? "btn-blank" : "",
		css ? `${css}` : ""
	];

	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	function focus_handler(event) {
		bubble.call(this, $$self, event);
	}

	function blur_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('mode' in $$props) $$invalidate(5, mode = $$props.mode);
		if ('size' in $$props) $$invalidate(6, size = $$props.size);
		if ('isBordered' in $$props) $$invalidate(7, isBordered = $$props.isBordered);
		if ('isBlock' in $$props) $$invalidate(8, isBlock = $$props.isBlock);
		if ('isBlank' in $$props) $$invalidate(9, isBlank = $$props.isBlank);
		if ('isDisabled' in $$props) $$invalidate(0, isDisabled = $$props.isDisabled);
		if ('role' in $$props) $$invalidate(1, role = $$props.role);
		if ('isRaised' in $$props) $$invalidate(10, isRaised = $$props.isRaised);
		if ('isCircle' in $$props) $$invalidate(11, isCircle = $$props.isCircle);
		if ('isRounded' in $$props) $$invalidate(12, isRounded = $$props.isRounded);
		if ('isSkinned' in $$props) $$invalidate(13, isSkinned = $$props.isSkinned);
		if ('ariaSelected' in $$props) $$invalidate(2, ariaSelected = $$props.ariaSelected);
		if ('css' in $$props) $$invalidate(14, css = $$props.css);
		if ('type' in $$props) $$invalidate(3, type = $$props.type);
		if ('$$scope' in $$props) $$invalidate(15, $$scope = $$props.$$scope);
	};

	return [
		isDisabled,
		role,
		ariaSelected,
		type,
		klasses,
		mode,
		size,
		isBordered,
		isBlock,
		isBlank,
		isRaised,
		isCircle,
		isRounded,
		isSkinned,
		css,
		$$scope,
		slots,
		click_handler,
		focus_handler,
		blur_handler
	];
}

class Button extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-ot6kwu-style")) add_css$b();

		init(this, options, instance$b, create_fragment$b, safe_not_equal, {
			mode: 5,
			size: 6,
			isBordered: 7,
			isBlock: 8,
			isBlank: 9,
			isDisabled: 0,
			role: 1,
			isRaised: 10,
			isCircle: 11,
			isRounded: 12,
			isSkinned: 13,
			ariaSelected: 2,
			css: 14,
			type: 3
		});
	}
}

var Button$1 = Button;

/* src/stories/ButtonGroup.svelte generated by Svelte v3.39.0 */

function add_css$a() {
	var style = element("style");
	style.id = "svelte-3gxaiw-style";
	style.textContent = ".btn-group.svelte-3gxaiw{display:inline-flex;flex-direction:row}.btn-group.svelte-3gxaiw>button{border-radius:var(--agnostic-btn-radius, var(--agnostic-radius, 0.25rem))}.btn-group.svelte-3gxaiw>button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;margin-inline-end:-1px}.btn-group.svelte-3gxaiw>button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}";
	append(document.head, style);
}

function create_fragment$a(ctx) {
	let div;
	let div_class_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", div_class_value = "" + (null_to_empty(/*klasses*/ ctx[1]) + " svelte-3gxaiw"));
			attr(div, "role", "group");
			attr(div, "aria-label", /*ariaLabel*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*click_handler*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*klasses*/ 2 && div_class_value !== (div_class_value = "" + (null_to_empty(/*klasses*/ ctx[1]) + " svelte-3gxaiw"))) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty & /*ariaLabel*/ 1) {
				attr(div, "aria-label", /*ariaLabel*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance$a($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { ariaLabel = "" } = $$props;
	let { css = "" } = $$props;
	let klasses = ["btn-group", css ? `${css}` : ""];
	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('ariaLabel' in $$props) $$invalidate(0, ariaLabel = $$props.ariaLabel);
		if ('css' in $$props) $$invalidate(2, css = $$props.css);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [ariaLabel, klasses, css, $$scope, slots, click_handler];
}

class ButtonGroup extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-3gxaiw-style")) add_css$a();
		init(this, options, instance$a, create_fragment$a, safe_not_equal, { ariaLabel: 0, css: 2 });
	}
}

var ButtonGroup$1 = ButtonGroup;

/* src/stories/Card.svelte generated by Svelte v3.39.0 */

function add_css$9() {
	var style = element("style");
	style.id = "svelte-1wjhsnv-style";
	style.textContent = ".card.svelte-1wjhsnv,.card-base.svelte-1wjhsnv{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card.svelte-1wjhsnv,.card-skin.svelte-1wjhsnv{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0)\n        var(--agnostic-card-boxshadow1-offset-y, 0.375rem)\n        var(--agnostic-card-boxshadow1-blur, 0.5625rem)\n        var(--agnostic-card-boxshadow1-color, rgba(6, 6, 6, 0.075)),\n      var(--agnostic-card-boxshadow2-offset-x, 0)\n        var(--agnostic-card-boxshadow2-offset-y, 0)\n        var(--agnostic-card-boxshadow2-blur, 1px)\n        var(--agnostic-card-boxshadow2-color, rgba(5, 5, 5, 0.1));border-radius:var(\n      --agnostic-card-border-radius,\n      var(--agnostic-radius, 0.25rem)\n    );overflow:hidden}.card.svelte-1wjhsnv:hover,.card-skin.svelte-1wjhsnv:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0)\n        var(--agnostic-card-boxshadow1-offset-y, 0.375rem)\n        var(--agnostic-card-boxshadow1-blur, 0.875rem)\n        var(--agnostic-card-boxshadow1-color, rgba(4, 4, 4, 0.1)),\n      var(--agnostic-card-boxshadow2-offset-x, 0)\n        var(--agnostic-card-boxshadow2-offset-y, 0)\n        var(--agnostic-card-boxshadow2-blur, 2px)\n        var(--agnostic-card-boxshadow2-color, rgba(3, 3, 3, 0.1))}.card-animated.svelte-1wjhsnv{transition:box-shadow ease-out 5s,\n      transform var(--agnostic-timing-fast)\n        cubic-bezier(\n          var(--agnostic-card-cubic-1, 0.39),\n          var(--agnostic-card-cubic-2, 0.575),\n          var(--agnostic-card-cubic-3, 0.565),\n          var(--agnostic-card-cubic-4, 1)\n        )}.card-animated.svelte-1wjhsnv:hover{transform:translateY(var(--agnostic-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),\n      transform var(--agnostic-timing-slow)\n        cubic-bezier(\n          var(--agnostic-card-cubic-1, 0.39),\n          var(--agnostic-card-cubic-2, 0.575),\n          var(--agnostic-card-cubic-3, 0.565),\n          var(--agnostic-card-cubic-4, 1)\n        )}.card-stacked.svelte-1wjhsnv{flex-direction:column}";
	append(document.head, style);
}

function create_fragment$9(ctx) {
	let div;
	let div_class_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", div_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1wjhsnv"));
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "click", /*click_handler*/ ctx[7]),
					listen(div, "focus", /*focus_handler*/ ctx[8]),
					listen(div, "blur", /*blur_handler*/ ctx[9])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*klasses*/ 1 && div_class_value !== (div_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1wjhsnv"))) {
				attr(div, "class", div_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$9($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { isAnimated = false } = $$props;
	let { isSkinned = true } = $$props;
	let { isStacked = false } = $$props;
	let { css = "" } = $$props;

	let klasses = [
		isSkinned ? "card" : "card-base",
		isAnimated ? "card-animated" : "",
		isStacked ? "card-stacked" : "",
		css ? `${css}` : ""
	];

	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	function focus_handler(event) {
		bubble.call(this, $$self, event);
	}

	function blur_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('isAnimated' in $$props) $$invalidate(1, isAnimated = $$props.isAnimated);
		if ('isSkinned' in $$props) $$invalidate(2, isSkinned = $$props.isSkinned);
		if ('isStacked' in $$props) $$invalidate(3, isStacked = $$props.isStacked);
		if ('css' in $$props) $$invalidate(4, css = $$props.css);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		klasses,
		isAnimated,
		isSkinned,
		isStacked,
		css,
		$$scope,
		slots,
		click_handler,
		focus_handler,
		blur_handler
	];
}

class Card extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1wjhsnv-style")) add_css$9();

		init(this, options, instance$9, create_fragment$9, safe_not_equal, {
			isAnimated: 1,
			isSkinned: 2,
			isStacked: 3,
			css: 4
		});
	}
}

var Card$1 = Card;

/* src/stories/ChoiceInput.svelte generated by Svelte v3.39.0 */

function add_css$8() {
	var style = element("style");
	style.id = "svelte-1gx4dmi-style";
	style.textContent = ".checkbox-group.svelte-1gx4dmi.svelte-1gx4dmi,.radio-group.svelte-1gx4dmi.svelte-1gx4dmi{--width-28:calc(7 * var(--fluid-4));border:1px solid\n      var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:var(--fluid-8)}.checkbox-group-large.svelte-1gx4dmi.svelte-1gx4dmi,.radio-group-large.svelte-1gx4dmi.svelte-1gx4dmi{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend.svelte-1gx4dmi.svelte-1gx4dmi,.radio-legend.svelte-1gx4dmi.svelte-1gx4dmi{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox.svelte-1gx4dmi.svelte-1gx4dmi,.radio.svelte-1gx4dmi.svelte-1gx4dmi{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0}.checkbox-small.svelte-1gx4dmi.svelte-1gx4dmi,.radio-small.svelte-1gx4dmi.svelte-1gx4dmi{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large.svelte-1gx4dmi.svelte-1gx4dmi,.radio-large.svelte-1gx4dmi.svelte-1gx4dmi{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label-wrap.svelte-1gx4dmi.svelte-1gx4dmi{display:block;cursor:pointer;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label-wrap-inline.svelte-1gx4dmi.svelte-1gx4dmi{display:inline-flex}.checkbox-label-wrap-inline.svelte-1gx4dmi.svelte-1gx4dmi:not(:last-child),.radio-label-wrap-inline.svelte-1gx4dmi.svelte-1gx4dmi:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label.svelte-1gx4dmi.svelte-1gx4dmi{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label.svelte-1gx4dmi.svelte-1gx4dmi:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border, background-color, transform;transition-duration:var(--agnostic-timing-fast);transition-timing-function:ease-in-out}.checkbox-label.svelte-1gx4dmi.svelte-1gx4dmi:before,.radio-label.svelte-1gx4dmi.svelte-1gx4dmi:before{content:\"\";display:inline-block;margin-inline-end:var(--agnostic-checkbox-spacing-end, 0.75rem);transition:var(--agnostic-timing-fast) ease-out all}.checkbox-label.svelte-1gx4dmi.svelte-1gx4dmi:before{border:2px solid\n      var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnostic-timing-fast) ease-out}.radio-label.svelte-1gx4dmi.svelte-1gx4dmi:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid\n      var(--agnostic-checkbox-light, var(--agnostic-light));box-shadow:0 0 0 var(--fluid-2)\n      var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));transition:box-shadow var(--agnostic-timing-fast) ease-out}.checkbox-label-small.svelte-1gx4dmi.svelte-1gx4dmi:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small.svelte-1gx4dmi.svelte-1gx4dmi:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small.svelte-1gx4dmi.svelte-1gx4dmi:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large.svelte-1gx4dmi.svelte-1gx4dmi:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large.svelte-1gx4dmi.svelte-1gx4dmi:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large.svelte-1gx4dmi.svelte-1gx4dmi:before{width:var(--fluid-16);height:var(--fluid-16)}.radio.svelte-1gx4dmi:checked+.radio-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2)\n      var(--agnostic-checkbox-border-color, var(--agnostic-gray-light))}.radio.svelte-1gx4dmi:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2)\n        var(--agnostic-checkbox-border-color, var(--agnostic-gray-light)),\n      0 0 0 calc(1.5 * var(--fluid-2)) white,\n      0 0 0 calc(2.25 * var(--fluid-2)) var(--agnostic-focus-ring-color)}.checkbox.svelte-1gx4dmi:focus+.checkbox-label:before{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);outline:3px solid transparent}.checkbox.svelte-1gx4dmi:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox.svelte-1gx4dmi:checked+.checkbox-label:before{background:var(--agnostic-checkbox-fill-color, #08a880);border:2px solid var(--agnostic-checkbox-fill-color, #08a880)}.checkbox-group-hidden.svelte-1gx4dmi.svelte-1gx4dmi,.radio-group-hidden.svelte-1gx4dmi.svelte-1gx4dmi{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled].svelte-1gx4dmi+.checkbox-label.svelte-1gx4dmi,.radio[disabled].svelte-1gx4dmi+.radio-label.svelte-1gx4dmi,.checkbox-label-wrap.disabled.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label-wrap.disabled.svelte-1gx4dmi.svelte-1gx4dmi,.checkbox-label-wrap-inline.disabled.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label-wrap-inline.disabled.svelte-1gx4dmi.svelte-1gx4dmi{color:var(\n      --agnostic-input-disabled-color,\n      var(--agnostic-disabled-color)\n    ) !important;appearance:none !important;box-shadow:none !important;cursor:not-allowed !important;opacity:0.8 !important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label-wrap.disabled.svelte-1gx4dmi.svelte-1gx4dmi,.checkbox-label-wrap-inline.disabled.svelte-1gx4dmi.svelte-1gx4dmi,.radio-label-wrap-inline.disabled.svelte-1gx4dmi.svelte-1gx4dmi{outline:2px solid transparent;outline-offset:-2px}}";
	append(document.head, style);
}

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i].name;
	child_ctx[24] = list[i].value;
	child_ctx[25] = list[i].label;
	child_ctx[27] = i;
	return child_ctx;
}

// (307:2) {#each options as { name, value, label }
function create_each_block$1(ctx) {
	let label;
	let input;
	let input_class_value;
	let input_id_value;
	let input_type_value;
	let input_name_value;
	let input_value_value;
	let input_disabled_value;
	let input_checked_value;
	let t0;
	let span;
	let t1_value = /*label*/ ctx[25] + "";
	let t1;
	let span_class_value;
	let t2;
	let label_class_value;
	let label_disabled_value;
	let mounted;
	let dispose;

	let input_levels = [
		{
			class: input_class_value = /*inputClasses*/ ctx[10]()
		},
		{
			id: input_id_value = "choice-" + /*name*/ ctx[23] + "-" + /*index*/ ctx[27]
		},
		{
			type: input_type_value = /*getType*/ ctx[5]()
		},
		{
			name: input_name_value = /*name*/ ctx[23]
		},
		{
			value: input_value_value = /*value*/ ctx[24]
		},
		{
			disabled: input_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[24])
		},
		{
			checked: input_checked_value = /*checkedOptions*/ ctx[3].includes(/*value*/ ctx[24])
		},
		/*$$restProps*/ ctx[11]
	];

	let input_data = {};

	for (let i = 0; i < input_levels.length; i += 1) {
		input_data = assign(input_data, input_levels[i]);
	}

	return {
		c() {
			label = element("label");
			input = element("input");
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			set_attributes(input, input_data);
			toggle_class(input, "svelte-1gx4dmi", true);
			attr(span, "class", span_class_value = "" + (null_to_empty(/*labelSpanClasses*/ ctx[7]()) + " svelte-1gx4dmi"));
			attr(label, "class", label_class_value = "" + (null_to_empty(/*labelClasses*/ ctx[6]()) + " svelte-1gx4dmi"));
			attr(label, "disabled", label_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[24]) || undefined);
		},
		m(target, anchor) {
			insert(target, label, anchor);
			append(label, input);
			input.value = input_data.value;
			append(label, t0);
			append(label, span);
			append(span, t1);
			append(label, t2);

			if (!mounted) {
				dispose = [
					listen(input, "blur", /*blur_handler*/ ctx[17]),
					listen(input, "change", /*change_handler*/ ctx[18]),
					listen(input, "input", /*input_handler*/ ctx[19]),
					listen(input, "click", /*click_handler*/ ctx[20]),
					listen(input, "focus", /*focus_handler*/ ctx[21])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			set_attributes(input, input_data = get_spread_update(input_levels, [
				{ class: input_class_value },
				dirty & /*options*/ 2 && input_id_value !== (input_id_value = "choice-" + /*name*/ ctx[23] + "-" + /*index*/ ctx[27]) && { id: input_id_value },
				{ type: input_type_value },
				dirty & /*options*/ 2 && input_name_value !== (input_name_value = /*name*/ ctx[23]) && { name: input_name_value },
				dirty & /*options*/ 2 && input_value_value !== (input_value_value = /*value*/ ctx[24]) && input.value !== input_value_value && { value: input_value_value },
				dirty & /*isDisabled, disabledOptions, options*/ 7 && input_disabled_value !== (input_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[24])) && { disabled: input_disabled_value },
				dirty & /*checkedOptions, options*/ 10 && input_checked_value !== (input_checked_value = /*checkedOptions*/ ctx[3].includes(/*value*/ ctx[24])) && { checked: input_checked_value },
				dirty & /*$$restProps*/ 2048 && /*$$restProps*/ ctx[11]
			]));

			if ('value' in input_data) {
				input.value = input_data.value;
			}

			toggle_class(input, "svelte-1gx4dmi", true);
			if (dirty & /*options*/ 2 && t1_value !== (t1_value = /*label*/ ctx[25] + "")) set_data(t1, t1_value);

			if (dirty & /*isDisabled, disabledOptions, options*/ 7 && label_disabled_value !== (label_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[24]) || undefined)) {
				attr(label, "disabled", label_disabled_value);
			}
		},
		d(detaching) {
			if (detaching) detach(label);
			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment$8(ctx) {
	let fieldset;
	let legend;
	let t0;
	let t1;
	let each_value = /*options*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	return {
		c() {
			fieldset = element("fieldset");
			legend = element("legend");
			t0 = text(/*legendLabel*/ ctx[4]);
			t1 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(legend, "class", "" + (null_to_empty(/*legendClasses*/ ctx[8]()) + " svelte-1gx4dmi"));
			attr(fieldset, "class", "" + (null_to_empty(/*fieldsetClasses*/ ctx[9]()) + " svelte-1gx4dmi"));
		},
		m(target, anchor) {
			insert(target, fieldset, anchor);
			append(fieldset, legend);
			append(legend, t0);
			append(fieldset, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(fieldset, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*legendLabel*/ 16) set_data(t0, /*legendLabel*/ ctx[4]);

			if (dirty & /*labelClasses, isDisabled, disabledOptions, options, undefined, labelSpanClasses, inputClasses, getType, checkedOptions, $$restProps*/ 3311) {
				each_value = /*options*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(fieldset, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(fieldset);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance$8($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"isSkinned","isFieldset","isInline","isDisabled","options","disabledOptions","checkedOptions","legendLabel","type","size"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	const TYPE = ["checkbox", "radio"];
	let { isSkinned = true } = $$props;
	let { isFieldset = true } = $$props;
	let { isInline = false } = $$props;
	let { isDisabled = undefined } = $$props;
	let { options = [] } = $$props;
	let { disabledOptions = [] } = $$props;
	let { checkedOptions = [] } = $$props;
	let { legendLabel = "" } = $$props;
	let { type = "checkbox" } = $$props;
	let { size = "" } = $$props;

	const getType = () => {
		if (!TYPE.includes(type)) {
			console.warn(`allowed types are ${TYPE}`);
			$$invalidate(12, type = "checkbox");
		}

		return type;
	};

	const labelClasses = () => {
		let klasses = [
			type ? `${type}-label-wrap` : "",
			isInline ? `${type}-label-wrap-inline` : ""
		];

		klasses = klasses.filter(klass => klass.length);
		return klasses.join(" ");
	};

	const labelSpanClasses = () => {
		let klasses = [type ? `${type}-label` : "", size ? `${type}-label-${size}` : ""];
		klasses = klasses.filter(klass => klass.length);
		return klasses.join(" ");
	};

	const legendClasses = () => {
		// If consumer sets is skinned to false we don't style the legend
		let skin = isSkinned ? `${type}-legend` : "";

		let klasses = [
			skin,
			// .screenreader-only is expected to be globally available via common.min.css
			isFieldset === false ? "screenreader-only" : ""
		];

		return klasses.join(" ");
	};

	const fieldsetClasses = () => {
		// If consumer sets is skinned to false we don't style the fieldset
		const skin = isSkinned ? `${type}-group` : "";

		// we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
		const sizeSkin = isSkinned && size === "large"
		? `${type}-group-${size}`
		: "";

		let klasses = [skin, sizeSkin, isFieldset === false ? `${type}-group-hidden` : ""];
		klasses = klasses.filter(klass => klass.length);
		return klasses.join(" ");
	};

	const inputClasses = () => {
		let inputKlasses = [
			type ? `${type}` : "",
			size ? `${type}-${size}` : "",
			isDisabled ? "disabled" : ""
		];

		inputKlasses = inputKlasses.filter(klass => klass.length);
		return inputKlasses.join(" ");
	};

	function blur_handler(event) {
		bubble.call(this, $$self, event);
	}

	function change_handler(event) {
		bubble.call(this, $$self, event);
	}

	function input_handler(event) {
		bubble.call(this, $$self, event);
	}

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	function focus_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('isSkinned' in $$new_props) $$invalidate(13, isSkinned = $$new_props.isSkinned);
		if ('isFieldset' in $$new_props) $$invalidate(14, isFieldset = $$new_props.isFieldset);
		if ('isInline' in $$new_props) $$invalidate(15, isInline = $$new_props.isInline);
		if ('isDisabled' in $$new_props) $$invalidate(0, isDisabled = $$new_props.isDisabled);
		if ('options' in $$new_props) $$invalidate(1, options = $$new_props.options);
		if ('disabledOptions' in $$new_props) $$invalidate(2, disabledOptions = $$new_props.disabledOptions);
		if ('checkedOptions' in $$new_props) $$invalidate(3, checkedOptions = $$new_props.checkedOptions);
		if ('legendLabel' in $$new_props) $$invalidate(4, legendLabel = $$new_props.legendLabel);
		if ('type' in $$new_props) $$invalidate(12, type = $$new_props.type);
		if ('size' in $$new_props) $$invalidate(16, size = $$new_props.size);
	};

	return [
		isDisabled,
		options,
		disabledOptions,
		checkedOptions,
		legendLabel,
		getType,
		labelClasses,
		labelSpanClasses,
		legendClasses,
		fieldsetClasses,
		inputClasses,
		$$restProps,
		type,
		isSkinned,
		isFieldset,
		isInline,
		size,
		blur_handler,
		change_handler,
		input_handler,
		click_handler,
		focus_handler
	];
}

class ChoiceInput extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1gx4dmi-style")) add_css$8();

		init(this, options, instance$8, create_fragment$8, safe_not_equal, {
			isSkinned: 13,
			isFieldset: 14,
			isInline: 15,
			isDisabled: 0,
			options: 1,
			disabledOptions: 2,
			checkedOptions: 3,
			legendLabel: 4,
			type: 12,
			size: 16
		});
	}
}

var ChoiceInput$1 = ChoiceInput;

/* src/stories/Header.svelte generated by Svelte v3.39.0 */

function add_css$7() {
	var style = element("style");
	style.id = "svelte-1518l0j-style";
	style.textContent = ".header.svelte-1518l0j,.header-base.svelte-1518l0j{display:block}.header-base.svelte-1518l0j img,.header.svelte-1518l0j img{max-width:100%;height:auto}.header.svelte-1518l0j,.header-skin.svelte-1518l0j{background-color:var(\n      --agnostic-header-background-color,\n      var(--agnostic-light)\n    );box-shadow:var(--agnostic-header-box-shadow-hor, 0)\n      var(--agnostic-header-box-shadow-ver, 1px)\n      var(--agnostic-header-box-shadow-blur, 5px)\n      var(--agnostic-header-box-shadow-spread, 2px)\n      var(--agnostic-header-box-shadow-color, rgba(0, 0, 0, 0.1));font-family:var(\n      --agnostic-header-font-family,\n      var(--agnostic-font-family)\n    );border-bottom:1px solid\n      var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, 0.5rem);padding-block-end:var(--agnostic-vertical-pad, 0.5rem);padding-inline-start:var(--agnostic-side-padding, 0.75rem);padding-inline-end:var(--agnostic-side-padding, 0.75rem)}.header-content.svelte-1518l0j{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:space-around;align-items:center;flex-wrap:wrap}.header-sticky.svelte-1518l0j{position:relative;top:0;z-index:10}@media(min-width: 960px){.header-sticky.svelte-1518l0j{position:sticky}.header-content.svelte-1518l0j{flex-direction:row;justify-content:space-between}}";
	append(document.head, style);
}

const get_logoright_slot_changes = dirty => ({});
const get_logoright_slot_context = ctx => ({});
const get_logoleft_slot_changes = dirty => ({});
const get_logoleft_slot_context = ctx => ({});

function create_fragment$7(ctx) {
	let div1;
	let div0;
	let t0;
	let t1;
	let div1_class_value;
	let current;
	const logoleft_slot_template = /*#slots*/ ctx[5].logoleft;
	const logoleft_slot = create_slot(logoleft_slot_template, ctx, /*$$scope*/ ctx[4], get_logoleft_slot_context);
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
	const logoright_slot_template = /*#slots*/ ctx[5].logoright;
	const logoright_slot = create_slot(logoright_slot_template, ctx, /*$$scope*/ ctx[4], get_logoright_slot_context);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if (logoleft_slot) logoleft_slot.c();
			t0 = space();
			if (default_slot) default_slot.c();
			t1 = space();
			if (logoright_slot) logoright_slot.c();
			attr(div0, "class", "header-content svelte-1518l0j");
			attr(div1, "class", div1_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1518l0j"));
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);

			if (logoleft_slot) {
				logoleft_slot.m(div0, null);
			}

			append(div0, t0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append(div0, t1);

			if (logoright_slot) {
				logoright_slot.m(div0, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (logoleft_slot) {
				if (logoleft_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(logoleft_slot, logoleft_slot_template, ctx, /*$$scope*/ ctx[4], !current ? -1 : dirty, get_logoleft_slot_changes, get_logoleft_slot_context);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], !current ? -1 : dirty, null, null);
				}
			}

			if (logoright_slot) {
				if (logoright_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(logoright_slot, logoright_slot_template, ctx, /*$$scope*/ ctx[4], !current ? -1 : dirty, get_logoright_slot_changes, get_logoright_slot_context);
				}
			}

			if (!current || dirty & /*klasses*/ 1 && div1_class_value !== (div1_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1518l0j"))) {
				attr(div1, "class", div1_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(logoleft_slot, local);
			transition_in(default_slot, local);
			transition_in(logoright_slot, local);
			current = true;
		},
		o(local) {
			transition_out(logoleft_slot, local);
			transition_out(default_slot, local);
			transition_out(logoright_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (logoleft_slot) logoleft_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (logoright_slot) logoright_slot.d(detaching);
		}
	};
}

function instance$7($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { isSticky = false } = $$props;
	let { isSkinned = true } = $$props;
	let { css = "" } = $$props;

	let klasses = [
		isSkinned ? "header" : "header-base",
		isSticky ? "header-sticky" : "",
		css ? `${css}` : ""
	];

	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	$$self.$$set = $$props => {
		if ('isSticky' in $$props) $$invalidate(1, isSticky = $$props.isSticky);
		if ('isSkinned' in $$props) $$invalidate(2, isSkinned = $$props.isSkinned);
		if ('css' in $$props) $$invalidate(3, css = $$props.css);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [klasses, isSticky, isSkinned, css, $$scope, slots];
}

class Header extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1518l0j-style")) add_css$7();
		init(this, options, instance$7, create_fragment$7, safe_not_equal, { isSticky: 1, isSkinned: 2, css: 3 });
	}
}

var Header$1 = Header;

/* src/stories/HeaderNav.svelte generated by Svelte v3.39.0 */

function add_css$6() {
	var style = element("style");
	style.id = "svelte-acwymg-style";
	style.textContent = ".header-nav.svelte-acwymg{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media(min-width: 960px){.header-nav.svelte-acwymg{flex-direction:row}}";
	append(document.head, style);
}

function create_fragment$6(ctx) {
	let nav;
	let ul;
	let ul_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			nav = element("nav");
			ul = element("ul");
			if (default_slot) default_slot.c();
			attr(ul, "class", ul_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-acwymg"));
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, ul);

			if (default_slot) {
				default_slot.m(ul, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*klasses*/ 1 && ul_class_value !== (ul_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-acwymg"))) {
				attr(ul, "class", ul_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(nav);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { css = "" } = $$props;
	let klasses = ["header-nav", css ? `${css}` : ""];
	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	$$self.$$set = $$props => {
		if ('css' in $$props) $$invalidate(1, css = $$props.css);
		if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [klasses, css, $$scope, slots];
}

class HeaderNav extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-acwymg-style")) add_css$6();
		init(this, options, instance$6, create_fragment$6, safe_not_equal, { css: 1 });
	}
}

var HeaderNav$1 = HeaderNav;

/* src/stories/HeaderNavItem.svelte generated by Svelte v3.39.0 */

function add_css$5() {
	var style = element("style");
	style.id = "svelte-1iu85at-style";
	style.textContent = ".header-nav-item.svelte-1iu85at{display:inline-block}.header-nav-item.svelte-1iu85at:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item.svelte-1iu85at a{color:var(--agnostic-header-color, var(--agnostic-font-color));text-decoration:none}@media(min-width: 960px){.header-nav-item.svelte-1iu85at:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}";
	append(document.head, style);
}

function create_fragment$5(ctx) {
	let li;
	let li_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			li = element("li");
			if (default_slot) default_slot.c();
			attr(li, "class", li_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1iu85at"));
		},
		m(target, anchor) {
			insert(target, li, anchor);

			if (default_slot) {
				default_slot.m(li, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*klasses*/ 1 && li_class_value !== (li_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1iu85at"))) {
				attr(li, "class", li_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(li);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { css = "" } = $$props;
	let klasses = ["header-nav-item", css ? `${css}` : ""];
	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	$$self.$$set = $$props => {
		if ('css' in $$props) $$invalidate(1, css = $$props.css);
		if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [klasses, css, $$scope, slots];
}

class HeaderNavItem extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1iu85at-style")) add_css$5();
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { css: 1 });
	}
}

var HeaderNavItem$1 = HeaderNavItem;

/* src/stories/Input.svelte generated by Svelte v3.39.0 */

function add_css$4() {
	var style = element("style");
	style.id = "svelte-15el0ji-style";
	style.textContent = ".input-base.svelte-15el0ji,.input.svelte-15el0ji{user-select:initial;appearance:none;box-sizing:border-box;caret-color:currentColor}.label.svelte-15el0ji,.label-base.svelte-15el0ji{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help.svelte-15el0ji,.field-help-large.svelte-15el0ji,.field-help-small.svelte-15el0ji,.field-error.svelte-15el0ji,.field-error-large.svelte-15el0ji,.field-error-small.svelte-15el0ji,.label-skin.svelte-15el0ji,.label.svelte-15el0ji,.input-addon-container.svelte-15el0ji,.input-small.svelte-15el0ji,.input-large.svelte-15el0ji,.input-skin.svelte-15el0ji,.input-underlined.svelte-15el0ji,.input-underlined-bg.svelte-15el0ji,.input.svelte-15el0ji{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);width:100%;max-width:100%}.input-skin.svelte-15el0ji,.input.svelte-15el0ji{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(\n      --agnostic-input-border-color,\n      var(--agnostic-gray-light)\n    );padding-block-start:var(--agnostic-input-vertical-pad, 0.5rem);padding-block-end:var(--agnostic-input-vertical-pad, 0.5rem);padding-inline-start:var(--agnostic-input-side-padding, 0.75rem);padding-inline-end:var(--agnostic-input-side-padding, 0.75rem);transition-property:box-shadow;transition-duration:var(\n      --agnostic-input-timing,\n      var(--agnostic-timing-medium)\n    )}.label.svelte-15el0ji{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, 0.375rem);vertical-align:initial}.field-help.svelte-15el0ji,.field-error.svelte-15el0ji,.label.svelte-15el0ji,.label-skin.svelte-15el0ji{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline.svelte-15el0ji,.input-inline.svelte-15el0ji{width:auto}.label-inline.svelte-15el0ji{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, 0.75rem)}.input.svelte-15el0ji::-webkit-input-placeholder{color:currentColor;opacity:0.5;transition:opacity var(--agnostic-timing-fast) ease-out}.input.svelte-15el0ji::-moz-placeholder{color:currentColor;opacity:0.5;transition:opacity var(--agnostic-timing-fast) ease-out}.input.svelte-15el0ji::-ms-placeholder{color:currentColor;opacity:0.5;transition:opacity var(--agnostic-timing-fast) ease-out}.input.svelte-15el0ji:-ms-placeholder{color:currentColor;opacity:0.5;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined.svelte-15el0ji{border-top:0;border-left:0;border-right:0;border-color:var(\n      --agnostic-input-underlined-color,\n      var(--agnostic-gray-mid-dark)\n    );background-color:transparent}.input-underlined-bg.svelte-15el0ji{background-color:var(\n      --agnostic-input-underlined-bg-color,\n      var(--agnostic-gray-extra-light)\n    )}.input-rounded.svelte-15el0ji{border-radius:var(--agnostic-radius, 0.25rem)}.label-error.svelte-15el0ji{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error.svelte-15el0ji{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error.svelte-15el0ji,.field-error.svelte-15el0ji,.field-error-small.svelte-15el0ji,.field-error-large.svelte-15el0ji{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help.svelte-15el0ji,.field-help-small.svelte-15el0ji,.field-help-large.svelte-15el0ji{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help.svelte-15el0ji,.field-help-small.svelte-15el0ji,.field-help-large.svelte-15el0ji,.field-error.svelte-15el0ji,.field-error-small.svelte-15el0ji,.field-error-large.svelte-15el0ji{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, 0.5rem) / 2)}.input-large.svelte-15el0ji{font-size:calc(var(--agnostic-font-size, 1rem) + 0.25rem);line-height:1.6rem}.field-help-large.svelte-15el0ji,.field-error-large.svelte-15el0ji,.label-large.svelte-15el0ji{font-size:var(--agnostic-font-size, 1rem)}.input-small.svelte-15el0ji{font-size:calc(var(--agnostic-font-size, 1rem) - 0.25rem);line-height:1rem}.field-help-small.svelte-15el0ji,.field-error-small.svelte-15el0ji,.label-small.svelte-15el0ji{font-size:calc(var(--agnostic-font-size, 1rem) - 0.25rem)}.input.svelte-15el0ji:focus{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error.svelte-15el0ji:focus{box-shadow:0 0 0 3px transparent}.input.disabled.svelte-15el0ji,.input.svelte-15el0ji:disabled{background:var(\n      --agnostic-input-disabled-bg,\n      var(--agnostic-disabled-bg)\n    ) !important;color:var(\n      --agnostic-input-disabled-color,\n      var(--agnostic-disabled-color)\n    ) !important;appearance:none !important;box-shadow:none !important;cursor:not-allowed !important;opacity:0.8 !important}@media screen and (-ms-high-contrast: active){.input.svelte-15el0ji:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container.svelte-15el0ji{display:flex;position:relative;width:100%;--addon-padding:calc(var(--agnostic-input-side-padding, 0.75rem) * 1.5)}.input-has-left-addon.svelte-15el0ji,.input-has-right-addon.svelte-15el0ji{flex:1}.input-has-left-addon.svelte-15el0ji{padding-inline-start:calc(var(--addon-padding) * 2.25)}.input-has-right-addon.svelte-15el0ji{padding-inline-end:calc(var(--addon-padding) * 2.25)}";
	append(document.head, style);
}

const get_addonRight_slot_changes = dirty => ({});
const get_addonRight_slot_context = ctx => ({});
const get_addonLeft_slot_changes = dirty => ({});
const get_addonLeft_slot_context = ctx => ({});

// (416:2) {:else}
function create_else_block$1(ctx) {
	let input;
	let input_type_value;
	let input_class_value;
	let mounted;
	let dispose;

	let input_levels = [
		{ id: /*id*/ ctx[3] },
		{
			type: input_type_value = /*getInputType*/ ctx[15]()
		},
		{ value: /*value*/ ctx[0] },
		{
			class: input_class_value = /*inputClasses*/ ctx[11]()
		},
		{ disabled: /*isDisabled*/ ctx[9] },
		/*$$restProps*/ ctx[16]
	];

	let input_data = {};

	for (let i = 0; i < input_levels.length; i += 1) {
		input_data = assign(input_data, input_levels[i]);
	}

	return {
		c() {
			input = element("input");
			set_attributes(input, input_data);
			toggle_class(input, "svelte-15el0ji", true);
		},
		m(target, anchor) {
			insert(target, input, anchor);
			input.value = input_data.value;

			if (!mounted) {
				dispose = [
					listen(input, "blur", /*blur_handler_2*/ ctx[37]),
					listen(input, "change", /*change_handler_2*/ ctx[38]),
					listen(input, "input", /*input_handler_2*/ ctx[39]),
					listen(input, "click", /*click_handler_2*/ ctx[40]),
					listen(input, "focus", /*focus_handler_2*/ ctx[41])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			set_attributes(input, input_data = get_spread_update(input_levels, [
				dirty[0] & /*id*/ 8 && { id: /*id*/ ctx[3] },
				{ type: input_type_value },
				dirty[0] & /*value*/ 1 && input.value !== /*value*/ ctx[0] && { value: /*value*/ ctx[0] },
				{ class: input_class_value },
				dirty[0] & /*isDisabled*/ 512 && { disabled: /*isDisabled*/ ctx[9] },
				dirty[0] & /*$$restProps*/ 65536 && /*$$restProps*/ ctx[16]
			]));

			if ('value' in input_data) {
				input.value = input_data.value;
			}

			toggle_class(input, "svelte-15el0ji", true);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(input);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (398:42) 
function create_if_block_3(ctx) {
	let div;
	let t0;
	let input;
	let input_type_value;
	let input_class_value;
	let t1;
	let current;
	let mounted;
	let dispose;
	const addonLeft_slot_template = /*#slots*/ ctx[26].addonLeft;
	const addonLeft_slot = create_slot(addonLeft_slot_template, ctx, /*$$scope*/ ctx[25], get_addonLeft_slot_context);

	let input_levels = [
		{ id: /*id*/ ctx[3] },
		{ value: /*value*/ ctx[0] },
		{
			type: input_type_value = /*getInputType*/ ctx[15]()
		},
		{
			class: input_class_value = /*inputClasses*/ ctx[11]()
		},
		{ disabled: /*isDisabled*/ ctx[9] },
		/*$$restProps*/ ctx[16]
	];

	let input_data = {};

	for (let i = 0; i < input_levels.length; i += 1) {
		input_data = assign(input_data, input_levels[i]);
	}

	const addonRight_slot_template = /*#slots*/ ctx[26].addonRight;
	const addonRight_slot = create_slot(addonRight_slot_template, ctx, /*$$scope*/ ctx[25], get_addonRight_slot_context);

	return {
		c() {
			div = element("div");
			if (addonLeft_slot) addonLeft_slot.c();
			t0 = space();
			input = element("input");
			t1 = space();
			if (addonRight_slot) addonRight_slot.c();
			set_attributes(input, input_data);
			toggle_class(input, "svelte-15el0ji", true);
			attr(div, "class", "" + (null_to_empty(/*addonContainerClasses*/ ctx[14]()) + " svelte-15el0ji"));
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (addonLeft_slot) {
				addonLeft_slot.m(div, null);
			}

			append(div, t0);
			append(div, input);
			input.value = input_data.value;
			append(div, t1);

			if (addonRight_slot) {
				addonRight_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(input, "blur", /*blur_handler_1*/ ctx[32]),
					listen(input, "change", /*change_handler_1*/ ctx[33]),
					listen(input, "input", /*input_handler_1*/ ctx[34]),
					listen(input, "click", /*click_handler_1*/ ctx[35]),
					listen(input, "focus", /*focus_handler_1*/ ctx[36])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (addonLeft_slot) {
				if (addonLeft_slot.p && (!current || dirty[0] & /*$$scope*/ 33554432)) {
					update_slot(addonLeft_slot, addonLeft_slot_template, ctx, /*$$scope*/ ctx[25], !current ? [-1, -1] : dirty, get_addonLeft_slot_changes, get_addonLeft_slot_context);
				}
			}

			set_attributes(input, input_data = get_spread_update(input_levels, [
				(!current || dirty[0] & /*id*/ 8) && { id: /*id*/ ctx[3] },
				(!current || dirty[0] & /*value*/ 1 && input.value !== /*value*/ ctx[0]) && { value: /*value*/ ctx[0] },
				{ type: input_type_value },
				{ class: input_class_value },
				(!current || dirty[0] & /*isDisabled*/ 512) && { disabled: /*isDisabled*/ ctx[9] },
				dirty[0] & /*$$restProps*/ 65536 && /*$$restProps*/ ctx[16]
			]));

			if ('value' in input_data) {
				input.value = input_data.value;
			}

			toggle_class(input, "svelte-15el0ji", true);

			if (addonRight_slot) {
				if (addonRight_slot.p && (!current || dirty[0] & /*$$scope*/ 33554432)) {
					update_slot(addonRight_slot, addonRight_slot_template, ctx, /*$$scope*/ ctx[25], !current ? [-1, -1] : dirty, get_addonRight_slot_changes, get_addonRight_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(addonLeft_slot, local);
			transition_in(addonRight_slot, local);
			current = true;
		},
		o(local) {
			transition_out(addonLeft_slot, local);
			transition_out(addonRight_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (addonLeft_slot) addonLeft_slot.d(detaching);
			if (addonRight_slot) addonRight_slot.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (386:2) {#if type == 'textarea'}
function create_if_block_2(ctx) {
	let textarea;
	let textarea_class_value;
	let mounted;
	let dispose;

	let textarea_levels = [
		{ id: /*id*/ ctx[3] },
		{ value: /*value*/ ctx[0] },
		{
			class: textarea_class_value = /*inputClasses*/ ctx[11]()
		},
		/*$$restProps*/ ctx[16]
	];

	let textarea_data = {};

	for (let i = 0; i < textarea_levels.length; i += 1) {
		textarea_data = assign(textarea_data, textarea_levels[i]);
	}

	return {
		c() {
			textarea = element("textarea");
			set_attributes(textarea, textarea_data);
			toggle_class(textarea, "svelte-15el0ji", true);
		},
		m(target, anchor) {
			insert(target, textarea, anchor);

			if (!mounted) {
				dispose = [
					listen(textarea, "blur", /*blur_handler*/ ctx[27]),
					listen(textarea, "change", /*change_handler*/ ctx[28]),
					listen(textarea, "input", /*input_handler*/ ctx[29]),
					listen(textarea, "click", /*click_handler*/ ctx[30]),
					listen(textarea, "focus", /*focus_handler*/ ctx[31])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			set_attributes(textarea, textarea_data = get_spread_update(textarea_levels, [
				dirty[0] & /*id*/ 8 && { id: /*id*/ ctx[3] },
				dirty[0] & /*value*/ 1 && { value: /*value*/ ctx[0] },
				{ class: textarea_class_value },
				dirty[0] & /*$$restProps*/ 65536 && /*$$restProps*/ ctx[16]
			]));

			toggle_class(textarea, "svelte-15el0ji", true);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(textarea);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (435:21) 
function create_if_block_1$2(ctx) {
	let span;
	let t;

	return {
		c() {
			span = element("span");
			t = text(/*helpText*/ ctx[4]);
			attr(span, "class", "" + (null_to_empty(/*helpClasses*/ ctx[13]()) + " svelte-15el0ji"));
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*helpText*/ 16) set_data(t, /*helpText*/ ctx[4]);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (431:2) {#if isInvalid}
function create_if_block$2(ctx) {
	let span;
	let t;

	return {
		c() {
			span = element("span");
			t = text(/*invalidText*/ ctx[5]);
			attr(span, "role", "status");
			attr(span, "aria-live", "polite");
			attr(span, "class", "" + (null_to_empty(/*invalidClasses*/ ctx[12]()) + " svelte-15el0ji"));
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*invalidText*/ 32) set_data(t, /*invalidText*/ ctx[5]);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment$4(ctx) {
	let div;
	let label_1;
	let t0;
	let t1;
	let current_block_type_index;
	let if_block0;
	let t2;
	let current;
	const if_block_creators = [create_if_block_2, create_if_block_3, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*type*/ ctx[1] == 'textarea') return 0;
		if (/*hasLeftAddon*/ ctx[6] || /*hasRightAddon*/ ctx[7]) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*isInvalid*/ ctx[8]) return create_if_block$2;
		if (/*helpText*/ ctx[4]) return create_if_block_1$2;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block1 = current_block_type && current_block_type(ctx);

	return {
		c() {
			div = element("div");
			label_1 = element("label");
			t0 = text(/*label*/ ctx[2]);
			t1 = space();
			if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			attr(label_1, "class", "" + (null_to_empty(/*labelClasses*/ ctx[10]()) + " svelte-15el0ji"));
			attr(label_1, "for", /*id*/ ctx[3]);
			attr(div, "class", "w-100");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, label_1);
			append(label_1, t0);
			append(div, t1);
			if_blocks[current_block_type_index].m(div, null);
			append(div, t2);
			if (if_block1) if_block1.m(div, null);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*label*/ 4) set_data(t0, /*label*/ ctx[2]);

			if (!current || dirty[0] & /*id*/ 8) {
				attr(label_1, "for", /*id*/ ctx[3]);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				} else {
					if_block0.p(ctx, dirty);
				}

				transition_in(if_block0, 1);
				if_block0.m(div, t2);
			}

			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if (if_block1) if_block1.d(1);
				if_block1 = current_block_type && current_block_type(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(div, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if_blocks[current_block_type_index].d();

			if (if_block1) {
				if_block1.d();
			}
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"label","id","labelCss","helpText","invalidText","hasLeftAddon","hasRightAddon","isInvalid","isInline","isRounded","isDisabled","css","isSkinned","isUnderlinedWithBackground","isUnderlined","size","value","type"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const TYPES = ["text", "password", "email", "number", "url", "tel", "search", "textarea"];
	let { label = "" } = $$props;
	let { id = "" } = $$props;
	let { labelCss = "" } = $$props;
	let { helpText = "" } = $$props;
	let { invalidText = "" } = $$props;
	let { hasLeftAddon = false } = $$props;
	let { hasRightAddon = false } = $$props;
	let { isInvalid = false } = $$props;
	let { isInline = false } = $$props;
	let { isRounded = false } = $$props;
	let { isDisabled = undefined } = $$props;
	let { css = "" } = $$props;
	let { isSkinned = true } = $$props;
	let { isUnderlinedWithBackground = false } = $$props;
	let { isUnderlined = false } = $$props;
	let { size = "" } = $$props;
	let { value = "" } = $$props;
	let { type = "text" } = $$props;

	const labelClasses = () => {
		let labelKlasses = [
			"label",
			isInvalid ? "label-error" : "",
			isInline ? "label-inline" : "",
			size ? `label-${size}` : "",
			labelCss ? labelCss : ""
		];

		labelKlasses = labelKlasses.filter(klass => klass.length);
		labelKlasses = labelKlasses.join(" ");
		return labelKlasses;
	};

	const inputClasses = () => {
		let inputKlasses = [
			isSkinned ? "input" : "input-base",
			isRounded ? "input-rounded" : "",
			isUnderlined ? "input-underlined" : "",
			hasLeftAddon ? "input-has-left-addon" : "",
			hasRightAddon ? "input-has-right-addon" : "",
			isDisabled ? "disabled" : "",
			isInvalid ? "input-error" : "",
			isInline ? "input-inline" : "",
			isUnderlinedWithBackground ? "input-underlined-bg" : "",
			css ? css : "",
			size ? `input-${size}` : ""
		];

		inputKlasses = inputKlasses.filter(klass => klass.length);
		inputKlasses = inputKlasses.join(" ");
		return inputKlasses;
	};

	const invalidClasses = () => {
		return size ? `field-error-${size}` : "field-error";
	};

	const helpClasses = () => {
		return size ? `field-help-${size}` : "field-help";
	};

	const addonContainerClasses = () => "input-addon-container";

	const getInputType = () => {
		if (!TYPES.includes(type)) {
			console.warn(`allowed types are ${TYPES}`);
			$$invalidate(1, type = "text");
		}

		return type;
	};

	function blur_handler(event) {
		bubble.call(this, $$self, event);
	}

	function change_handler(event) {
		bubble.call(this, $$self, event);
	}

	function input_handler(event) {
		bubble.call(this, $$self, event);
	}

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	function focus_handler(event) {
		bubble.call(this, $$self, event);
	}

	function blur_handler_1(event) {
		bubble.call(this, $$self, event);
	}

	function change_handler_1(event) {
		bubble.call(this, $$self, event);
	}

	function input_handler_1(event) {
		bubble.call(this, $$self, event);
	}

	function click_handler_1(event) {
		bubble.call(this, $$self, event);
	}

	function focus_handler_1(event) {
		bubble.call(this, $$self, event);
	}

	function blur_handler_2(event) {
		bubble.call(this, $$self, event);
	}

	function change_handler_2(event) {
		bubble.call(this, $$self, event);
	}

	function input_handler_2(event) {
		bubble.call(this, $$self, event);
	}

	function click_handler_2(event) {
		bubble.call(this, $$self, event);
	}

	function focus_handler_2(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('label' in $$new_props) $$invalidate(2, label = $$new_props.label);
		if ('id' in $$new_props) $$invalidate(3, id = $$new_props.id);
		if ('labelCss' in $$new_props) $$invalidate(17, labelCss = $$new_props.labelCss);
		if ('helpText' in $$new_props) $$invalidate(4, helpText = $$new_props.helpText);
		if ('invalidText' in $$new_props) $$invalidate(5, invalidText = $$new_props.invalidText);
		if ('hasLeftAddon' in $$new_props) $$invalidate(6, hasLeftAddon = $$new_props.hasLeftAddon);
		if ('hasRightAddon' in $$new_props) $$invalidate(7, hasRightAddon = $$new_props.hasRightAddon);
		if ('isInvalid' in $$new_props) $$invalidate(8, isInvalid = $$new_props.isInvalid);
		if ('isInline' in $$new_props) $$invalidate(18, isInline = $$new_props.isInline);
		if ('isRounded' in $$new_props) $$invalidate(19, isRounded = $$new_props.isRounded);
		if ('isDisabled' in $$new_props) $$invalidate(9, isDisabled = $$new_props.isDisabled);
		if ('css' in $$new_props) $$invalidate(20, css = $$new_props.css);
		if ('isSkinned' in $$new_props) $$invalidate(21, isSkinned = $$new_props.isSkinned);
		if ('isUnderlinedWithBackground' in $$new_props) $$invalidate(22, isUnderlinedWithBackground = $$new_props.isUnderlinedWithBackground);
		if ('isUnderlined' in $$new_props) $$invalidate(23, isUnderlined = $$new_props.isUnderlined);
		if ('size' in $$new_props) $$invalidate(24, size = $$new_props.size);
		if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
		if ('type' in $$new_props) $$invalidate(1, type = $$new_props.type);
		if ('$$scope' in $$new_props) $$invalidate(25, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*value*/ 1) {
			if (!value) $$invalidate(0, value = "");
		}
	};

	return [
		value,
		type,
		label,
		id,
		helpText,
		invalidText,
		hasLeftAddon,
		hasRightAddon,
		isInvalid,
		isDisabled,
		labelClasses,
		inputClasses,
		invalidClasses,
		helpClasses,
		addonContainerClasses,
		getInputType,
		$$restProps,
		labelCss,
		isInline,
		isRounded,
		css,
		isSkinned,
		isUnderlinedWithBackground,
		isUnderlined,
		size,
		$$scope,
		slots,
		blur_handler,
		change_handler,
		input_handler,
		click_handler,
		focus_handler,
		blur_handler_1,
		change_handler_1,
		input_handler_1,
		click_handler_1,
		focus_handler_1,
		blur_handler_2,
		change_handler_2,
		input_handler_2,
		click_handler_2,
		focus_handler_2
	];
}

class Input extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-15el0ji-style")) add_css$4();

		init(
			this,
			options,
			instance$4,
			create_fragment$4,
			safe_not_equal,
			{
				label: 2,
				id: 3,
				labelCss: 17,
				helpText: 4,
				invalidText: 5,
				hasLeftAddon: 6,
				hasRightAddon: 7,
				isInvalid: 8,
				isInline: 18,
				isRounded: 19,
				isDisabled: 9,
				css: 20,
				isSkinned: 21,
				isUnderlinedWithBackground: 22,
				isUnderlined: 23,
				size: 24,
				value: 0,
				type: 1
			},
			[-1, -1]
		);
	}
}

var Input$1 = Input;

/* src/stories/InputAddonItem.svelte generated by Svelte v3.39.0 */

function add_css$3() {
	var style = element("style");
	style.id = "svelte-1cwsp3m-style";
	style.textContent = ".input-addon-right.svelte-1cwsp3m,.input-addon-left.svelte-1cwsp3m{--addon-padding:calc(var(--agnostic-input-side-padding) * 1.5);position:absolute;top:50%;transform:translateY(-50%)}.input-addon-left.svelte-1cwsp3m{left:var(--addon-padding)}.input-addon-right.svelte-1cwsp3m{right:var(--addon-padding)}";
	append(document.head, style);
}

function create_fragment$3(ctx) {
	let div;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", div_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1cwsp3m"));
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*klasses*/ 1 && div_class_value !== (div_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1cwsp3m"))) {
				attr(div, "class", div_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { css = "" } = $$props;
	let { addonLeft = false } = $$props;
	let { addonRight = false } = $$props;

	let klasses = [
		addonLeft ? "input-addon-left" : "",
		addonRight ? "input-addon-right" : "",
		css ? `${css}` : ""
	];

	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	$$self.$$set = $$props => {
		if ('css' in $$props) $$invalidate(1, css = $$props.css);
		if ('addonLeft' in $$props) $$invalidate(2, addonLeft = $$props.addonLeft);
		if ('addonRight' in $$props) $$invalidate(3, addonRight = $$props.addonRight);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [klasses, css, addonLeft, addonRight, $$scope, slots];
}

class InputAddonItem extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1cwsp3m-style")) add_css$3();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { css: 1, addonLeft: 2, addonRight: 3 });
	}
}

var InputAddonItem$1 = InputAddonItem;

/* src/stories/Progress.svelte generated by Svelte v3.39.0 */

function add_css$2() {
	var style = element("style");
	style.id = "svelte-1nzjr4n-style";
	style.textContent = ".progress.svelte-1nzjr4n{-webkit-appearance:none;height:var(--agnostic-progress-height, var(--fluid-10, 0.625rem));width:100%;border:none;background-color:var(\n      --agnostic-progress-background,\n      var(--agnostic-gray-light, #ededed)\n    );border-radius:var(--agnostic-progress-radius, var(--fluid-10, 0.625rem))}.progress[value].svelte-1nzjr4n::-webkit-progress-bar{background-color:var(\n      --agnostic-progress-background,\n      var(--agnostic-gray-light, #ededed)\n    );border-radius:var(--agnostic-progress-radius, var(--fluid-10, 0.625rem))}.progress[value].svelte-1nzjr4n::-webkit-progress-value{background-color:var(\n      --agnostic-progress-fill-color,\n      var(--agnostic-primary, #077acb)\n    );border-radius:var(--agnostic-progress-radius, var(--fluid-10, 0.625rem))}.progress[value].svelte-1nzjr4n::-moz-progress-bar{background-color:var(\n      --agnostic-progress-fill-color,\n      var(--agnostic-primary, #077acb)\n    );border-radius:var(--agnostic-progress-radius, var(--fluid-10, 0.625rem))}.progress[value].svelte-1nzjr4n::-ms-fill{background-color:var(\n      --agnostic-progress-fill-color,\n      var(--agnostic-primary, #077acb)\n    );border-radius:var(--agnostic-progress-radius, var(--fluid-10, 0.625rem))}";
	append(document.head, style);
}

function create_fragment$2(ctx) {
	let progress;
	let progress_class_value;

	return {
		c() {
			progress = element("progress");
			attr(progress, "class", progress_class_value = "" + (null_to_empty(/*klasses*/ ctx[2]) + " svelte-1nzjr4n"));
			progress.value = /*value*/ ctx[0];
			attr(progress, "max", /*max*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, progress, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*klasses*/ 4 && progress_class_value !== (progress_class_value = "" + (null_to_empty(/*klasses*/ ctx[2]) + " svelte-1nzjr4n"))) {
				attr(progress, "class", progress_class_value);
			}

			if (dirty & /*value*/ 1) {
				progress.value = /*value*/ ctx[0];
			}

			if (dirty & /*max*/ 2) {
				attr(progress, "max", /*max*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(progress);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { value = 0 } = $$props;
	let { max } = $$props;
	let { css = "" } = $$props;
	let klasses = ["progress", css ? `${css}` : ""];
	klasses = klasses.filter(klass => klass.length);
	klasses = klasses.join(" ");

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('max' in $$props) $$invalidate(1, max = $$props.max);
		if ('css' in $$props) $$invalidate(3, css = $$props.css);
	};

	return [value, max, klasses, css];
}

class Progress extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1nzjr4n-style")) add_css$2();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { value: 0, max: 1, css: 3 });
	}
}

var Progress$1 = Progress;

/* src/stories/Switch.svelte generated by Svelte v3.39.0 */

function add_css$1() {
	var style = element("style");
	style.id = "svelte-4jnsth-style";
	style.textContent = ".switch-container.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth{display:block;min-height:2.25rem;width:100%;padding:0.5rem;position:relative}.switch-container.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:hover{cursor:pointer}.switch.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:before,.switch.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:after{border:1px solid var(--agnostic-gray-mid-dark);content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.switch.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:after{background:#fff;border-radius:100%;width:1.4rem;height:1.4rem;right:1.4rem;transition:right var(--agnostic-timing-fast) ease-in-out}.switch.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:before{background:#eee;border-radius:1.75rem;width:2.75rem;height:1.75rem;right:0.25rem;transition:background var(--agnostic-timing-medium) ease-in-out}.switch-small.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:after{width:1.25rem;height:1.25rem;right:1.125rem}.switch-small.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:before{width:2.25rem;height:1.5rem}.switch-large.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:after{width:1.65rem;height:1.65rem;right:1.65rem}.switch-large.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:before{width:3.25rem;height:2rem}.switch-border.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:before{border:1px solid var(--agnostic-primary)}.switch-action.switch-border.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:before{border:1px solid var(--agnostic-action)}.switch-input.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth{margin:0;opacity:0.0001;position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.switch-input.svelte-4jnsth:focus+.switch.svelte-4jnsth.svelte-4jnsth:before{box-shadow:0 0 0 3px var(--agnostic-focus-ring-color)}.switch-input.svelte-4jnsth:checked+.switch.svelte-4jnsth.svelte-4jnsth:after{right:0.5em}.switch-input.svelte-4jnsth:checked+.switch-small.svelte-4jnsth.svelte-4jnsth:after{right:0.425rem}.switch-input.svelte-4jnsth:checked+.switch.svelte-4jnsth.svelte-4jnsth:not(.switch-border):before{background:var(--agnostic-primary)}.switch-input.svelte-4jnsth:checked+.switch-action.svelte-4jnsth.svelte-4jnsth:not(.switch-border):before{background:var(--agnostic-action)}.switch-input.svelte-4jnsth:checked+.switch-border.svelte-4jnsth.svelte-4jnsth:after{background:var(--agnostic-primary)}.switch-input.svelte-4jnsth:checked+.switch-action.switch-border.svelte-4jnsth.svelte-4jnsth:after{background:var(--agnostic-action)}.switch-right.svelte-4jnsth .switch.svelte-4jnsth.svelte-4jnsth:after{transition:left var(--agnostic-timing-fast) ease-in-out}.switch-right.svelte-4jnsth .switch-input.svelte-4jnsth:checked+.switch.svelte-4jnsth:after{right:initial;left:0.5em}.switch-right.svelte-4jnsth .switch-input.svelte-4jnsth:checked+.switch-small.svelte-4jnsth:after{right:initial;left:0.425rem}.switch-right.svelte-4jnsth .switch.svelte-4jnsth.svelte-4jnsth:before{right:initial;left:0.25rem}.switch-right.svelte-4jnsth .switch.svelte-4jnsth.svelte-4jnsth::after{right:initial;left:1.4rem}.switch-right.svelte-4jnsth .switch-label.svelte-4jnsth.svelte-4jnsth{position:absolute;top:0;right:0}.switch-right.svelte-4jnsth .switch-small.svelte-4jnsth.svelte-4jnsth:after{left:1.125rem}.switch-right.svelte-4jnsth .switch-large.svelte-4jnsth.svelte-4jnsth:after{left:1.65rem}.switch-input[disabled].svelte-4jnsth+.switch.svelte-4jnsth.svelte-4jnsth,.switch-input[disabled].svelte-4jnsth+.switch-label.svelte-4jnsth.svelte-4jnsth,.switch-container.disabled.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth{color:var(\n      --agnostic-input-disabled-color,\n      var(--agnostic-disabled-color)\n    ) !important;appearance:none !important;box-shadow:none !important;cursor:not-allowed !important;opacity:0.8 !important}@media screen and (-ms-high-contrast: active){.switch.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth:after{background-color:windowText}.switch-input[disabled].svelte-4jnsth+.switch-label.svelte-4jnsth.svelte-4jnsth,.switch-container.disabled.svelte-4jnsth.svelte-4jnsth.svelte-4jnsth{outline:2px solid transparent;outline-offset:-2px}}";
	append(document.head, style);
}

// (257:2) {#if labelPosition === 'left'}
function create_if_block_1$1(ctx) {
	let span;
	let t;

	return {
		c() {
			span = element("span");
			t = text(/*label*/ ctx[1]);
			attr(span, "class", "switch-label svelte-4jnsth");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*label*/ 2) set_data(t, /*label*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (270:2) {#if labelPosition === 'right'}
function create_if_block$1(ctx) {
	let span;
	let t;

	return {
		c() {
			span = element("span");
			t = text(/*label*/ ctx[1]);
			attr(span, "class", "switch-label svelte-4jnsth");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*label*/ 2) set_data(t, /*label*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment$1(ctx) {
	let label_1;
	let t0;
	let input;
	let t1;
	let span;
	let t2;
	let mounted;
	let dispose;
	let if_block0 = /*labelPosition*/ ctx[2] === 'left' && create_if_block_1$1(ctx);
	let if_block1 = /*labelPosition*/ ctx[2] === 'right' && create_if_block$1(ctx);

	return {
		c() {
			label_1 = element("label");
			if (if_block0) if_block0.c();
			t0 = space();
			input = element("input");
			t1 = space();
			span = element("span");
			t2 = space();
			if (if_block1) if_block1.c();
			attr(input, "type", "checkbox");
			attr(input, "class", "switch-input svelte-4jnsth");
			attr(input, "id", /*id*/ ctx[0]);
			input.checked = /*isChecked*/ ctx[3];
			input.disabled = /*isDisabled*/ ctx[4];
			attr(input, "role", "switch");
			attr(span, "class", "" + (null_to_empty(/*switchSpan*/ ctx[6]()) + " svelte-4jnsth"));
			attr(span, "aria-hidden", "true");
			attr(label_1, "class", "" + (null_to_empty(/*switchContainer*/ ctx[5]()) + " svelte-4jnsth"));
			attr(label_1, "for", /*id*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, label_1, anchor);
			if (if_block0) if_block0.m(label_1, null);
			append(label_1, t0);
			append(label_1, input);
			append(label_1, t1);
			append(label_1, span);
			append(label_1, t2);
			if (if_block1) if_block1.m(label_1, null);

			if (!mounted) {
				dispose = [
					listen(input, "change", /*change_handler*/ ctx[13]),
					listen(input, "click", /*handleClick*/ ctx[7]),
					listen(input, "keypress", /*handleKeypress*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*labelPosition*/ ctx[2] === 'left') {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1$1(ctx);
					if_block0.c();
					if_block0.m(label_1, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*id*/ 1) {
				attr(input, "id", /*id*/ ctx[0]);
			}

			if (dirty & /*isChecked*/ 8) {
				input.checked = /*isChecked*/ ctx[3];
			}

			if (dirty & /*isDisabled*/ 16) {
				input.disabled = /*isDisabled*/ ctx[4];
			}

			if (/*labelPosition*/ ctx[2] === 'right') {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block$1(ctx);
					if_block1.c();
					if_block1.m(label_1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*id*/ 1) {
				attr(label_1, "for", /*id*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(label_1);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { id = "" } = $$props;
	let { label = "" } = $$props;
	let { css = "" } = $$props;
	let { labelPosition = "left" } = $$props;
	let { size = "" } = $$props;
	let { isChecked = false } = $$props;
	let { isBordered = false } = $$props;
	let { isAction = false } = $$props;
	let { isDisabled = false } = $$props;

	const switchContainer = () => {
		let klasses = [
			"switch-container",
			labelPosition === "right" ? "switch-right" : "",
			css ? css : "",
			isDisabled ? "disabled" : ""
		];

		klasses = klasses.filter(klass => klass.length);
		return klasses.join(" ");
	};

	const switchSpan = () => {
		let klasses = [
			"switch",
			isBordered ? "switch-border" : "",
			isAction ? "switch-action" : "",
			size ? `switch-${size}` : ""
		];

		klasses = klasses.filter(klass => klass.length);
		return klasses.join(" ");
	};

	const handleClick = evt => {
		const el = evt.target;

		if (el.getAttribute("aria-checked") == "true") {
			el.setAttribute("aria-checked", "false");
		} else {
			el.setAttribute("aria-checked", "true");
		}
	};

	const handleKeypress = evt => {
		const keyCode = evt.keyCode || evt.which;

		switch (keyCode) {
			case 13:
				evt.preventDefault();
				evt.target.click();
				break;
		}
	};

	function change_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('id' in $$props) $$invalidate(0, id = $$props.id);
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('css' in $$props) $$invalidate(9, css = $$props.css);
		if ('labelPosition' in $$props) $$invalidate(2, labelPosition = $$props.labelPosition);
		if ('size' in $$props) $$invalidate(10, size = $$props.size);
		if ('isChecked' in $$props) $$invalidate(3, isChecked = $$props.isChecked);
		if ('isBordered' in $$props) $$invalidate(11, isBordered = $$props.isBordered);
		if ('isAction' in $$props) $$invalidate(12, isAction = $$props.isAction);
		if ('isDisabled' in $$props) $$invalidate(4, isDisabled = $$props.isDisabled);
	};

	return [
		id,
		label,
		labelPosition,
		isChecked,
		isDisabled,
		switchContainer,
		switchSpan,
		handleClick,
		handleKeypress,
		css,
		size,
		isBordered,
		isAction,
		change_handler
	];
}

class Switch extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-4jnsth-style")) add_css$1();

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			id: 0,
			label: 1,
			css: 9,
			labelPosition: 2,
			size: 10,
			isChecked: 3,
			isBordered: 11,
			isAction: 12,
			isDisabled: 4
		});
	}
}

var Switch$1 = Switch;

/* src/stories/Tabs.svelte generated by Svelte v3.39.0 */

function add_css() {
	var style = element("style");
	style.id = "svelte-1gd64ny-style";
	style.textContent = ".tab-list.svelte-1gd64ny,.tab-list-base.svelte-1gd64ny{display:flex}.tab-list.svelte-1gd64ny,.tab-skinned.svelte-1gd64ny{flex-wrap:wrap;flex-direction:row;padding-inline-start:0;margin-block-end:0;border-bottom:var(--agnostic-tabs-border-size, 1px) solid\n      var(--agnostic-tabs-bgcolor, var(--agnostic-gray-light));transition-property:all;transition-duration:var(--agnostic-timing-medium)}.tab-button.svelte-1gd64ny,.tab-button-base.svelte-1gd64ny{background-color:transparent;border:0;border-radius:0;box-shadow:none;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-block-end:0;padding-inline-start:0;padding-inline-end:0}.tab-button.svelte-1gd64ny:not(:first-of-type),.tab-button-base.svelte-1gd64ny:not(:first-of-type){margin-inline-start:-1px}.tab-button.svelte-1gd64ny,.tab-button-skin.svelte-1gd64ny{display:block;padding-block-start:var(--agnostic-vertical-pad, 0.5rem);padding-block-end:var(--agnostic-vertical-pad, 0.5rem);padding-inline-start:var(--agnostic-side-padding, 0.75rem);padding-inline-end:var(--agnostic-side-padding, 0.75rem);font-family:var(--agnostic-btn-font-family, var(--agnostic-font-family));font-weight:var(--agnostic-btn-font-weight, 400);font-size:var(--agnostic-btn-font-size, 1rem);line-height:var(--agnostic-line-height, 1.25rem);color:var(--agnostic-tabs-primary, var(--agnostic-primary));text-decoration:none;transition:color var(--agnostic-timing-fast) ease-in-out,\n      background-color var(--agnostic-timing-fast) ease-in-out,\n      border-color var(--agnostic-timing-fast) ease-in-out}.tab-borderless.svelte-1gd64ny{border:none !important}.tab-button-large.svelte-1gd64ny{padding-block-start:calc(var(--agnostic-input-side-padding) * 1.25);padding-block-end:calc(var(--agnostic-input-side-padding) * 1.25);padding-inline-start:calc(var(--agnostic-input-side-padding) * 1.75);padding-inline-end:calc(var(--agnostic-input-side-padding) * 1.75)}.tab-button-jumbo.svelte-1gd64ny{padding-block-start:calc(var(--agnostic-input-side-padding) * 2);padding-block-end:calc(var(--agnostic-input-side-padding) * 2);padding-inline-start:calc(var(--agnostic-input-side-padding) * 3);padding-inline-end:calc(var(--agnostic-input-side-padding) * 3)}.tab-item.tab-button.svelte-1gd64ny{margin-block-end:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:var(--agnostic-tabs-radius, 0.25rem);border-top-right-radius:var(--agnostic-tabs-radius, 0.25rem)}.tab-item.tab-button.active.svelte-1gd64ny{color:var(--agnostic-gray-dark);background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.tab-item.svelte-1gd64ny:hover,.tab-button.svelte-1gd64ny:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate;cursor:pointer}.tab-button.svelte-1gd64ny:disabled{color:var(--agnostic-tabas-disabled-bg, var(--agnostic-gray-mid-dark));background-color:transparent;border-color:transparent;opacity:0.8}";
	append(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[16] = i;
	return child_ctx;
}

// (172:4) {:else}
function create_else_block(ctx) {
	let button;
	let t0_value = /*tab*/ ctx[12].title + "";
	let t0;
	let t1;
	let button_disabled_value;
	let button_class_value;
	let button_aria_selected_value;
	let mounted;
	let dispose;

	function click_handler_1() {
		return /*click_handler_1*/ ctx[10](/*i*/ ctx[16]);
	}

	return {
		c() {
			button = element("button");
			t0 = text(t0_value);
			t1 = space();
			button.disabled = button_disabled_value = /*isDisabled*/ ctx[1] || /*disabledOptions*/ ctx[2].includes(/*tab*/ ctx[12].title) || undefined;
			attr(button, "class", button_class_value = "" + (null_to_empty(/*tabButtonClasses*/ ctx[5](/*tab*/ ctx[12])) + " svelte-1gd64ny"));
			attr(button, "role", "tab");
			attr(button, "aria-selected", button_aria_selected_value = /*tab*/ ctx[12].isActive);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t0);
			append(button, t1);

			if (!mounted) {
				dispose = listen(button, "click", click_handler_1);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*tabs*/ 1 && t0_value !== (t0_value = /*tab*/ ctx[12].title + "")) set_data(t0, t0_value);

			if (dirty & /*isDisabled, disabledOptions, tabs*/ 7 && button_disabled_value !== (button_disabled_value = /*isDisabled*/ ctx[1] || /*disabledOptions*/ ctx[2].includes(/*tab*/ ctx[12].title) || undefined)) {
				button.disabled = button_disabled_value;
			}

			if (dirty & /*tabs*/ 1 && button_class_value !== (button_class_value = "" + (null_to_empty(/*tabButtonClasses*/ ctx[5](/*tab*/ ctx[12])) + " svelte-1gd64ny"))) {
				attr(button, "class", button_class_value);
			}

			if (dirty & /*tabs*/ 1 && button_aria_selected_value !== (button_aria_selected_value = /*tab*/ ctx[12].isActive)) {
				attr(button, "aria-selected", button_aria_selected_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

// (162:4) {#if tab.tabButtonComponent}
function create_if_block_1(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	function click_handler() {
		return /*click_handler*/ ctx[9](/*i*/ ctx[16]);
	}

	var switch_value = /*tab*/ ctx[12].tabButtonComponent;

	function switch_props(ctx) {
		return {
			props: {
				disabled: /*isDisabled*/ ctx[1] || /*disabledOptions*/ ctx[2].includes(/*tab*/ ctx[12].title) || undefined,
				class: /*tabButtonClasses*/ ctx[5](/*tab*/ ctx[12]),
				isActive: /*tab*/ ctx[12].isActive,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		switch_instance.$on("click", click_handler);
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const switch_instance_changes = {};
			if (dirty & /*isDisabled, disabledOptions, tabs*/ 7) switch_instance_changes.disabled = /*isDisabled*/ ctx[1] || /*disabledOptions*/ ctx[2].includes(/*tab*/ ctx[12].title) || undefined;
			if (dirty & /*tabs*/ 1) switch_instance_changes.class = /*tabButtonClasses*/ ctx[5](/*tab*/ ctx[12]);
			if (dirty & /*tabs*/ 1) switch_instance_changes.isActive = /*tab*/ ctx[12].isActive;

			if (dirty & /*$$scope, tabs*/ 131073) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*tab*/ ctx[12].tabButtonComponent)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					switch_instance.$on("click", click_handler);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (163:6) <svelte:component         this="{tab.tabButtonComponent}"         on:click="{() => selectTab(i)}"         disabled="{isDisabled || disabledOptions.includes(tab.title) || undefined}"         class="{tabButtonClasses(tab)}"         isActive="{tab.isActive}"       >
function create_default_slot(ctx) {
	let t0_value = /*tab*/ ctx[12].title + "";
	let t0;
	let t1;

	return {
		c() {
			t0 = text(t0_value);
			t1 = space();
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*tabs*/ 1 && t0_value !== (t0_value = /*tab*/ ctx[12].title + "")) set_data(t0, t0_value);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (161:2) {#each tabs as tab, i}
function create_each_block_1(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*tab*/ ctx[12].tabButtonComponent) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (186:2) {#if tab.isActive}
function create_if_block(ctx) {
	let div;
	let switch_instance;
	let t;
	let current;
	var switch_value = /*tab*/ ctx[12].tabPanelComponent;

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
	}

	return {
		c() {
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t = space();
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			append(div, t);
			current = true;
		},
		p(ctx, dirty) {
			if (switch_value !== (switch_value = /*tab*/ ctx[12].tabPanelComponent)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props());
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, t);
				} else {
					switch_instance = null;
				}
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (switch_instance) destroy_component(switch_instance);
		}
	};
}

// (185:0) {#each tabs as tab}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*tab*/ ctx[12].isActive && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*tab*/ ctx[12].isActive) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*tabs*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let each1_anchor;
	let current;
	let each_value_1 = /*tabs*/ ctx[0];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
		each_blocks_1[i] = null;
	});

	let each_value = /*tabs*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out_1 = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each1_anchor = empty();
			attr(div, "class", "" + (null_to_empty(/*tablistClasses*/ ctx[4]()) + " svelte-1gd64ny"));
			attr(div, "role", "tablist");
			attr(div, "aria-label", "Tabs");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div, null);
			}

			insert(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*tabs, isDisabled, disabledOptions, undefined, tabButtonClasses, selectTab*/ 47) {
				each_value_1 = /*tabs*/ ctx[0];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
						transition_in(each_blocks_1[i], 1);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						transition_in(each_blocks_1[i], 1);
						each_blocks_1[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (dirty & /*tabs*/ 1) {
				each_value = /*tabs*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out_1(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks_1 = each_blocks_1.filter(Boolean);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { size = "" } = $$props;
	let { tabs = [] } = $$props;
	let { isBorderless = false } = $$props;
	let { isDisabled = false } = $$props;
	let { disabledOptions = [] } = $$props;
	let { isSkinned = true } = $$props;

	const selectTab = index => {
		$$invalidate(0, tabs = tabs.map((tab, i) => {
			tab.isActive = index === i ? true : false;
			return tab;
		}));
	};

	let activeTabs = tabs.filter(tab => tab.isActive);

	if (activeTabs.length === 0) {
		selectTab(0);
	}

	const tablistClasses = () => {
		const tabListClass = isSkinned ? "tab-list" : "tab-list-base";
		return [tabListClass, isBorderless ? `tab-borderless` : ""].filter(klass => klass.length).join(" ");
	};

	const tabButtonClasses = tab => {
		const klasses = [
			`tab-item`,
			`tab-button`,
			tab.isActive ? "active" : "",
			size === "large" ? "tab-button-large" : "",
			size === "jumbo" ? "tab-button-jumbo" : ""
		];

		return klasses.filter(klass => klass.length).join(" ");
	};

	const click_handler = i => selectTab(i);
	const click_handler_1 = i => selectTab(i);

	$$self.$$set = $$props => {
		if ('size' in $$props) $$invalidate(6, size = $$props.size);
		if ('tabs' in $$props) $$invalidate(0, tabs = $$props.tabs);
		if ('isBorderless' in $$props) $$invalidate(7, isBorderless = $$props.isBorderless);
		if ('isDisabled' in $$props) $$invalidate(1, isDisabled = $$props.isDisabled);
		if ('disabledOptions' in $$props) $$invalidate(2, disabledOptions = $$props.disabledOptions);
		if ('isSkinned' in $$props) $$invalidate(8, isSkinned = $$props.isSkinned);
	};

	return [
		tabs,
		isDisabled,
		disabledOptions,
		selectTab,
		tablistClasses,
		tabButtonClasses,
		size,
		isBorderless,
		isSkinned,
		click_handler,
		click_handler_1
	];
}

class Tabs extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1gd64ny-style")) add_css();

		init(this, options, instance, create_fragment, safe_not_equal, {
			size: 6,
			tabs: 0,
			isBorderless: 7,
			isDisabled: 1,
			disabledOptions: 2,
			isSkinned: 8
		});
	}
}

var Tabs$1 = Tabs;

export { Button$1 as Button, ButtonGroup$1 as ButtonGroup, Card$1 as Card, ChoiceInput$1 as ChoiceInput, Header$1 as Header, HeaderNav$1 as HeaderNav, HeaderNavItem$1 as HeaderNavItem, Input$1 as Input, InputAddonItem$1 as InputAddonItem, Progress$1 as Progress, Switch$1 as Switch, Tabs$1 as Tabs };
