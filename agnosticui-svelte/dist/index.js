(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.agnosticuisvelte = {}));
})(this, (function (exports) { 'use strict';

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

    function add_css$3() {
    	var style = element("style");
    	style.id = "svelte-brlr2l-style";
    	style.textContent = ".btn-base.svelte-brlr2l,.btn.svelte-brlr2l{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;user-select:none;appearance:none;cursor:pointer;box-sizing:border-box;transition-property:all;transition-duration:var(--agnosticui-timing-medium)}.btn-skin.svelte-brlr2l,.btn.svelte-brlr2l{color:var(--agnosticui-btn-font-color, var(--agnosticui-dark));background-color:var(\n      --agnosticui-btn-bgcolor,\n      var(--agnosticui-gray-light)\n    );border-color:var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));border-style:solid;border-width:var(--agnosticui-btn-border-size, 1px);font-family:var(\n      --agnosticui-btn-font-family,\n      var(--agnosticui-font-family)\n    );font-weight:var(--agnosticui-btn-font-weight, 400);font-size:var(--agnosticui-btn-font-size, 1rem);line-height:var(--agnosticui-line-height, 1.25rem);padding-block-start:var(--agnosticui-vertical-pad, 0.5rem);padding-block-end:var(--agnosticui-vertical-pad, 0.5rem);padding-inline-start:var(--agnosticui-side-padding, 0.75rem);padding-inline-end:var(--agnosticui-side-padding, 0.75rem);text-decoration:none;text-align:center;outline:none}.btn.svelte-brlr2l:visited{color:var(--agnosticui-btn-font-color, var(--agnosticui-dark))}.btn.svelte-brlr2l:hover{opacity:0.85;text-decoration:none}.btn.svelte-brlr2l:active{text-shadow:0 1px 0 rgba(255, 255, 255, 0.3);text-decoration:none;transition-duration:0s;box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.2)}.btn.svelte-brlr2l:focus{box-shadow:0 0 0 3px var(--agnosticui-focus-ring-color);outline:3px solid transparent;transition:box-shadow var(--agnosticui-timing-fast) ease-out}.btn.disabled.svelte-brlr2l,.btn.svelte-brlr2l:disabled{top:0 !important;background:var(\n      --agnosticui-btn-disabled-bg,\n      var(--agnosticui-gray-mid-dark)\n    ) !important;text-shadow:0 1px 1px rgba(255, 255, 255, 1) !important;border-color:transparent;color:var(\n      --agnosticui-btn-disabled-color,\n      var(--agnosticui-gray-dark)\n    ) !important;cursor:default !important;appearance:none !important;box-shadow:none !important;opacity:0.8 !important}.btn-primary.svelte-brlr2l{background-color:var(--agnosticui-btn-primary, var(--agnosticui-primary));border-color:var(--agnosticui-btn-primary, var(--agnosticui-primary));color:var(--agnosticui-btn-primary-color, var(--agnosticui-light))}.btn-primary.btn-bordered.svelte-brlr2l{color:var(--agnosticui-btn-primary, var(--agnosticui-primary))}.btn-primary.btn-bordered.svelte-brlr2l:hover,.btn-primary.btn-bordered.svelte-brlr2l:focus{background-color:var(--agnosticui-btn-primary, var(--agnosticui-primary));color:var(--agnosticui-btn-primary-color, var(--agnosticui-light))}.btn-primary.svelte-brlr2l:visited{color:var(--agnosticui-btn-primary-color, var(--agnosticui-light))}.btn-secondary.svelte-brlr2l{background-color:var(\n      --agnosticui-btn-secondary,\n      var(--agnosticui-secondary)\n    );border-color:var(--agnosticui-btn-secondary, var(--agnosticui-secondary));color:var(--agnosticui-btn-secondary-color, var(--agnosticui-light))}.btn-secondary.btn-bordered.svelte-brlr2l{color:var(--agnosticui-btn-secondary, var(--agnosticui-secondary))}.btn-secondary.btn-bordered.svelte-brlr2l:hover,.btn-secondary.btn-bordered.svelte-brlr2l:focus{background-color:var(\n      --agnosticui-btn-secondary,\n      var(--agnosticui-secondary)\n    );color:var(--agnosticui-btn-secondary-color, var(--agnosticui-light))}.btn-secondary.svelte-brlr2l:visited{color:var(--agnosticui-btn-secondary-color, var(--agnosticui-light))}.btn-raised.svelte-brlr2l{border-color:var(--agnosticui-btn-bgcolor, var(--agnosticui-gray-light));border-style:solid;background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(#f6f6f6),\n      to(#e1e1e1)\n    );background:linear-gradient(\n      var(--agnosticui-btn-raised-from, var(--agnosticui-gray-mid)),\n      var(--agnosticui-btn-raised-to, var(--agnosticui-gray-extra-light))\n    );-webkit-box-shadow:inset 0px 1px 0px rgba(255, 255, 255, 0.3),\n      0 1px 2px rgba(0, 0, 0, 0.15);box-shadow:inset 0px 1px 0px rgba(255, 255, 255, 0.3),\n      0 1px 2px rgba(0, 0, 0, 0.15)}.btn-raised.svelte-brlr2l:hover,.btn-raised.svelte-brlr2l:focus{background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(white),\n      to(gainsboro)\n    );background:linear-gradient(to bottom, white, gainsboro)}.btn-raised.active.svelte-brlr2l{background:#eeeeee;-webkit-box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;box-shadow:inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white}.btn-raised.btn-primary.svelte-brlr2l{border-color:var(\n      --agnosticui-btn-primary-raised-to,\n      var(--agnosticui-primary-from)\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnosticui-btn-primary-raised-from,\n          var(--agnosticui-primary-from)\n        )\n      ),\n      to(var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-to)))\n    );background:linear-gradient(\n      var(--agnosticui-btn-primary-raised-from, var(--agnosticui-primary-from)),\n      var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-to))\n    )}.btn-raised.btn-primary.svelte-brlr2l:hover,.btn-raised.btn-primary.svelte-brlr2l:focus{background:linear-gradient(\n      to bottom,\n      var(\n        --agnosticui-btn-primary-raised-hover-from,\n        var(--agnosticui-primary-hover)\n      ),\n      var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from))\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnosticui-btn-primary-raised-hover-from,\n          var(--agnosticui-primary-hover)\n        )\n      ),\n      to(\n        var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from))\n      )\n    );background:linear-gradient(\n      var(\n        --agnosticui-btn-primary-raised-hover-from,\n        var(--agnosticui-primary-hover)\n      ),\n      var(--agnosticui-btn-primary-raised-to, var(--agnosticui-primary-from))\n    )}.btn-raised.btn-primary.svelte-brlr2l:active,.btn-raised.btn-primary.active.svelte-brlr2l{opacity:0.9;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.3)}.btn-raised.btn-secondary.svelte-brlr2l{border-color:var(\n      --agnosticui-btn-secondary-raised-to,\n      var(--agnosticui-secondary-to)\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnosticui-btn-secondary-raised-from,\n          var(--agnosticui-secondary-from)\n        )\n      ),\n      to(\n        var(\n          --agnosticui-btn-secondary-raised-to,\n          var(--agnosticui-secondary-to)\n        )\n      )\n    );background:linear-gradient(\n      var(\n        --agnosticui-btn-secondary-raised-from,\n        var(--agnosticui-secondary-from)\n      ),\n      var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to))\n    )}.btn-raised.btn-secondary.svelte-brlr2l:hover,.btn-raised.btn-secondary.svelte-brlr2l:focus{background:linear-gradient(\n      to bottom,\n      var(\n        --agnosticui-btn-secondary-raised-hover-from,\n        var(--agnosticui-secondary-hover)\n      ),\n      var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to))\n    );background:-webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(\n        var(\n          --agnosticui-btn-secondary-raised-hover-from,\n          var(--agnosticui-secondary-hover)\n        )\n      ),\n      to(\n        var(\n          --agnosticui-btn-secondary-raised-to,\n          var(--agnosticui-secondary-to)\n        )\n      )\n    );background:linear-gradient(\n      var(\n        --agnosticui-btn-secondary-raised-hover-from,\n        var(--agnosticui-secondary-hover)\n      ),\n      var(--agnosticui-btn-secondary-raised-to, var(--agnosticui-secondary-to))\n    )}.btn-raised.btn-secondary.svelte-brlr2l:active,.btn-raised.btn-secondary.active.svelte-brlr2l{opacity:0.9;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.3)}.btn-bordered.svelte-brlr2l{border-width:1px;background:transparent}.btn-large.svelte-brlr2l{font-size:calc(var(--agnosticui-btn-font-size, 1rem) + 0.25rem);height:3rem;line-height:3rem;padding:0 3rem}.btn-small.svelte-brlr2l{font-size:calc(var(--agnosticui-btn-font-size, 1rem) - 0.25rem);height:2rem;line-height:2rem;padding:0 2rem}.btn-rounded.svelte-brlr2l{border-radius:var(--agnosticui-btn-radius, 0.25rem)}.btn-pill.svelte-brlr2l{border-radius:200px}.btn-circle.svelte-brlr2l{border-radius:100%;width:2.5rem;height:2.5rem;padding:0 !important}.btn-circle-large.svelte-brlr2l{font-size:calc(var(--agnosticui-btn-font-size, 1rem) + 0.25rem);width:3rem;height:3rem}.btn-circle-small.svelte-brlr2l{font-size:calc(var(--agnosticui-btn-font-size, 1rem) - 0.25rem);width:2rem;height:2rem}.btn-block.svelte-brlr2l{width:100%}.btn-block-following.svelte-brlr2l{margin-block-start:-1px}.btn-blank.svelte-brlr2l{background-color:transparent;border:0;border-radius:0;box-shadow:none}.btn-blank.svelte-brlr2l:hover,.btn-blank.svelte-brlr2l:active,.btn-blank.svelte-brlr2l:focus{background:none;outline:3px solid transparent}";
    	append(document.head, style);
    }

    function create_fragment$3(ctx) {
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
    			attr(button, "class", button_class_value = "" + (null_to_empty(/*klasses*/ ctx[4]) + " svelte-brlr2l"));
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

    			if (!current || dirty & /*klasses*/ 16 && button_class_value !== (button_class_value = "" + (null_to_empty(/*klasses*/ ctx[4]) + " svelte-brlr2l"))) {
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

    function instance$3($$self, $$props, $$invalidate) {
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
    	// agnosticui-svelte/src/stories/ButtonSlot.svelte
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
    		if (!document.getElementById("svelte-brlr2l-style")) add_css$3();

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
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

    function add_css$2() {
    	var style = element("style");
    	style.id = "svelte-1hvnear-style";
    	style.textContent = ".btn-group.svelte-1hvnear{display:inline-flex;flex-direction:row}.btn-group.svelte-1hvnear>button{border-radius:var(--agnosticui-btn-radius, var(--fluid-4))}.btn-group.svelte-1hvnear>button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;margin-inline-end:-1px}.btn-group.svelte-1hvnear>button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}";
    	append(document.head, style);
    }

    function create_fragment$2(ctx) {
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
    			attr(div, "class", div_class_value = "" + (null_to_empty(/*klasses*/ ctx[1]) + " svelte-1hvnear"));
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

    			if (!current || dirty & /*klasses*/ 2 && div_class_value !== (div_class_value = "" + (null_to_empty(/*klasses*/ ctx[1]) + " svelte-1hvnear"))) {
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

    function instance$2($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-1hvnear-style")) add_css$2();
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { ariaLabel: 0, css: 2 });
    	}
    }

    var ButtonGroup$1 = ButtonGroup;

    /* src/stories/Card.svelte generated by Svelte v3.39.0 */

    function add_css$1() {
    	var style = element("style");
    	style.id = "svelte-1q4tg37-style";
    	style.textContent = ".card.svelte-1q4tg37,.card-base.svelte-1q4tg37{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card.svelte-1q4tg37,.card-skin.svelte-1q4tg37{box-shadow:var(--agnosticui-card-boxshadow1-offset-x, 2px)\n        var(--agnosticui-card-boxshadow1-offset-y, 6px)\n        var(--agnosticui-card-boxshadow1-blur, 4px)\n        var(--agnosticui-card-boxshadow1-color, rgba(0, 0, 0, 0.25)),\n      var(--agnosticui-card-boxshadow2-offset-x, -2px)\n        var(--agnosticui-card-boxshadow2-offset-y, -1px)\n        var(--agnosticui-card-boxshadow2-blur, 6px)\n        var(--agnosticui-card-boxshadow2-color, rgba(0, 0, 0, 0.15));border-radius:var(--agnosticui-card-border-radius, 4px);overflow:hidden}.card.svelte-1q4tg37:hover,.card-skin.svelte-1q4tg37:hover{box-shadow:var(--agnosticui-card-boxshadow1-offset-x, 2px)\n        var(--agnosticui-card-boxshadow1-offset-y, 6px)\n        var(--agnosticui-card-boxshadow1-blur, 4px)\n        var(--agnosticui-card-boxshadow-hover-color-from, rgba(0, 0, 0, 0.35)),\n      var(--agnosticui-card-boxshadow2-offset-x, -2px)\n        var(--agnosticui-card-boxshadow2-offset-y, -1px)\n        var(--agnosticui-card-boxshadow2-blur, 6px)\n        var(--agnosticui-card-boxshadow-hover-color-to, rgba(0, 0, 0, 0.25))}.card-animated.svelte-1q4tg37{transition:box-shadow ease-out 5s,\n      transform var(--agnosticui-timing-fast)\n        cubic-bezier(\n          var(--agnosticui-card-cubic-1, 0.39),\n          var(--agnosticui-card-cubic-2, 0.575),\n          var(--agnosticui-card-cubic-3, 0.565),\n          var(--agnosticui-card-cubic-4, 1)\n        )}.card-animated.svelte-1q4tg37:hover{transform:translateY(var(--agnosticui-card-translateY-hover, -3px));transition:box-shadow ease-out var(--agnosticui-timing-fast),\n      transform var(--agnosticui-timing-slow)\n        cubic-bezier(\n          var(--agnosticui-card-cubic-1, 0.39),\n          var(--agnosticui-card-cubic-2, 0.575),\n          var(--agnosticui-card-cubic-3, 0.565),\n          var(--agnosticui-card-cubic-4, 1)\n        )}.card-stacked.svelte-1q4tg37{flex-direction:column}";
    	append(document.head, style);
    }

    function create_fragment$1(ctx) {
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
    			attr(div, "class", div_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1q4tg37"));
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

    			if (!current || dirty & /*klasses*/ 1 && div_class_value !== (div_class_value = "" + (null_to_empty(/*klasses*/ ctx[0]) + " svelte-1q4tg37"))) {
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

    function instance$1($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-1q4tg37-style")) add_css$1();

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			isAnimated: 1,
    			isSkinned: 2,
    			isStacked: 3,
    			css: 4
    		});
    	}
    }

    var Card$1 = Card;

    /* src/stories/ChoiceInput.svelte generated by Svelte v3.39.0 */

    function add_css() {
    	var style = element("style");
    	style.id = "svelte-jot2oo-style";
    	style.textContent = ".checkbox-group.svelte-jot2oo.svelte-jot2oo,.radio-group.svelte-jot2oo.svelte-jot2oo{--width-28:calc(7 * var(--fluid-4));border:1px solid\n      var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));padding:var(--fluid-24);padding-top:var(--fluid-14);border-radius:0.5rem}.checkbox-group-large.svelte-jot2oo.svelte-jot2oo,.radio-group-large.svelte-jot2oo.svelte-jot2oo{padding:var(--width-28);padding-top:var(--fluid-16)}.checkbox-legend.svelte-jot2oo.svelte-jot2oo,.radio-legend.svelte-jot2oo.svelte-jot2oo{padding:var(--fluid-2) var(--fluid-14);border-radius:var(--fluid-2)}.checkbox.svelte-jot2oo.svelte-jot2oo,.radio.svelte-jot2oo.svelte-jot2oo{position:absolute;width:var(--fluid-14);height:var(--fluid-14);opacity:0}.checkbox-small.svelte-jot2oo.svelte-jot2oo,.radio-small.svelte-jot2oo.svelte-jot2oo{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-large.svelte-jot2oo.svelte-jot2oo,.radio-large.svelte-jot2oo.svelte-jot2oo{width:var(--fluid-16);height:var(--fluid-16)}.checkbox-label-wrap.svelte-jot2oo.svelte-jot2oo,.radio-label-wrap.svelte-jot2oo.svelte-jot2oo{display:block;cursor:pointer;user-select:none;position:relative;line-height:var(--fluid-36)}.checkbox-label-wrap-inline.svelte-jot2oo.svelte-jot2oo,.radio-label-wrap-inline.svelte-jot2oo.svelte-jot2oo{display:inline-flex}.checkbox-label-wrap-inline.svelte-jot2oo.svelte-jot2oo:not(:last-child),.radio-label-wrap-inline.svelte-jot2oo.svelte-jot2oo:not(:last-child){margin-inline-end:var(--fluid-8)}.checkbox-label.svelte-jot2oo.svelte-jot2oo,.radio-label.svelte-jot2oo.svelte-jot2oo{display:flex;align-items:center;flex-wrap:wrap}.checkbox-label.svelte-jot2oo.svelte-jot2oo:after{content:\"\";position:absolute;left:var(--fluid-6);top:var(--fluid-10);width:var(--fluid-6);height:var(--fluid-12);border:solid white;border-width:0 var(--fluid-2) var(--fluid-2) 0;transform-origin:center center;transform:rotate(40deg) scale(0);transition-property:border, background-color, transform;transition-duration:var(--agnosticui-timing-fast);transition-timing-function:ease-in-out}.checkbox-label.svelte-jot2oo.svelte-jot2oo:before,.radio-label.svelte-jot2oo.svelte-jot2oo:before{content:\"\";display:inline-block;margin-inline-end:var(--agnosticui-checkbox-spacing-end, 0.75rem);transition:var(--agnosticui-timing-fast) ease-out all}.checkbox-label.svelte-jot2oo.svelte-jot2oo:before{border:2px solid\n      var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));width:var(--fluid-16);height:var(--fluid-16);transition:box-shadow var(--agnosticui-timing-fast) ease-out}.radio-label.svelte-jot2oo.svelte-jot2oo:before{width:var(--fluid-14);height:var(--fluid-14);vertical-align:calc(-1 * var(--fluid-2));border-radius:50%;border:var(--fluid-2) solid\n      var(--agnosticui-checkbox-light, var(--agnosticui-light));box-shadow:0 0 0 var(--fluid-2)\n      var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light));transition:box-shadow var(--agnosticui-timing-fast) ease-out}.checkbox-label-small.svelte-jot2oo.svelte-jot2oo:after{left:calc(1.25 * var(--fluid-4))}.checkbox-label-small.svelte-jot2oo.svelte-jot2oo:before{width:var(--fluid-14);height:var(--fluid-14)}.radio-label-small.svelte-jot2oo.svelte-jot2oo:before{width:var(--fluid-12);height:var(--fluid-12)}.checkbox-label-large.svelte-jot2oo.svelte-jot2oo:after{left:calc(1.75 * var(--fluid-4))}.checkbox-label-large.svelte-jot2oo.svelte-jot2oo:before{width:var(--fluid-18);height:var(--fluid-18)}.radio-label-large.svelte-jot2oo.svelte-jot2oo:before{width:var(--fluid-16);height:var(--fluid-16)}.radio.svelte-jot2oo:checked+.radio-label:before{background:var(--agnosticui-checkbox-fill-color, #08a880);box-shadow:0 0 0 var(--fluid-2)\n      var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light))}.radio.svelte-jot2oo:focus+.radio-label:before{box-shadow:0 0 0 var(--fluid-2)\n        var(--agnosticui-checkbox-border-color, var(--agnosticui-gray-light)),\n      0 0 0 calc(1.5 * var(--fluid-2)) white,\n      0 0 0 calc(2.25 * var(--fluid-2)) var(--agnosticui-focus-ring-color)}.checkbox.svelte-jot2oo:focus+.checkbox-label:before{box-shadow:0 0 0 3px var(--agnosticui-focus-ring-color);outline:3px solid transparent}.checkbox.svelte-jot2oo:checked+.checkbox-label:after{transform:rotate(40deg) scale(1)}.checkbox.svelte-jot2oo:checked+.checkbox-label:before{background:var(--agnosticui-checkbox-fill-color, #08a880);border:2px solid var(--agnosticui-checkbox-fill-color, #08a880)}.checkbox-group-hidden.svelte-jot2oo.svelte-jot2oo,.radio-group-hidden.svelte-jot2oo.svelte-jot2oo{border:0;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0}.checkbox[disabled].svelte-jot2oo+.checkbox-label.svelte-jot2oo,.radio[disabled].svelte-jot2oo+.radio-label.svelte-jot2oo,.checkbox-label-wrap.disabled.svelte-jot2oo.svelte-jot2oo,.radio-label-wrap.disabled.svelte-jot2oo.svelte-jot2oo,.checkbox-label-wrap-inline.disabled.svelte-jot2oo.svelte-jot2oo,.radio-label-wrap-inline.disabled.svelte-jot2oo.svelte-jot2oo{color:var(\n      --agnosticui-input-disabled-color,\n      var(--agnosticui-disabled-color)\n    ) !important;appearance:none !important;box-shadow:none !important;cursor:not-allowed !important;opacity:0.8 !important}@media screen and (-ms-high-contrast: active){.checkbox-label-wrap.disabled.svelte-jot2oo.svelte-jot2oo,.radio-label-wrap.disabled.svelte-jot2oo.svelte-jot2oo,.checkbox-label-wrap-inline.disabled.svelte-jot2oo.svelte-jot2oo,.radio-label-wrap-inline.disabled.svelte-jot2oo.svelte-jot2oo{outline:2px solid transparent;outline-offset:-2px}}";
    	append(document.head, style);
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[21] = list[i].name;
    	child_ctx[22] = list[i].value;
    	child_ctx[23] = list[i].label;
    	child_ctx[25] = i;
    	return child_ctx;
    }

    // (288:2) {#each options as { name, value, label }
    function create_each_block(ctx) {
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
    	let t1_value = /*label*/ ctx[23] + "";
    	let t1;
    	let span_class_value;
    	let t2;
    	let label_class_value;
    	let label_disabled_value;
    	let mounted;
    	let dispose;

    	let input_levels = [
    		{
    			class: input_class_value = /*inputClasses*/ ctx[9]()
    		},
    		{
    			id: input_id_value = "choice-" + /*name*/ ctx[21] + "-" + /*index*/ ctx[25]
    		},
    		{
    			type: input_type_value = /*getType*/ ctx[5]()
    		},
    		{
    			name: input_name_value = /*name*/ ctx[21]
    		},
    		{
    			value: input_value_value = /*value*/ ctx[22]
    		},
    		{
    			disabled: input_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[22])
    		},
    		{
    			checked: input_checked_value = /*checkedOptions*/ ctx[3].includes(/*value*/ ctx[22])
    		},
    		/*$$restProps*/ ctx[10]
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
    			toggle_class(input, "svelte-jot2oo", true);
    			attr(span, "class", span_class_value = "" + (null_to_empty(/*labelSpanClasses*/ ctx[7]()) + " svelte-jot2oo"));
    			attr(label, "class", label_class_value = "" + (null_to_empty(/*labelClasses*/ ctx[6]()) + " svelte-jot2oo"));
    			attr(label, "disabled", label_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[22]) || undefined);
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
    					listen(input, "blur", /*blur_handler*/ ctx[15]),
    					listen(input, "change", /*change_handler*/ ctx[16]),
    					listen(input, "input", /*input_handler*/ ctx[17]),
    					listen(input, "click", /*click_handler*/ ctx[18]),
    					listen(input, "focus", /*focus_handler*/ ctx[19])
    				];

    				mounted = true;
    			}
    		},
    		p(ctx, dirty) {
    			set_attributes(input, input_data = get_spread_update(input_levels, [
    				{ class: input_class_value },
    				dirty & /*options*/ 2 && input_id_value !== (input_id_value = "choice-" + /*name*/ ctx[21] + "-" + /*index*/ ctx[25]) && { id: input_id_value },
    				{ type: input_type_value },
    				dirty & /*options*/ 2 && input_name_value !== (input_name_value = /*name*/ ctx[21]) && { name: input_name_value },
    				dirty & /*options*/ 2 && input_value_value !== (input_value_value = /*value*/ ctx[22]) && input.value !== input_value_value && { value: input_value_value },
    				dirty & /*isDisabled, disabledOptions, options*/ 7 && input_disabled_value !== (input_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[22])) && { disabled: input_disabled_value },
    				dirty & /*checkedOptions, options*/ 10 && input_checked_value !== (input_checked_value = /*checkedOptions*/ ctx[3].includes(/*value*/ ctx[22])) && { checked: input_checked_value },
    				dirty & /*$$restProps*/ 1024 && /*$$restProps*/ ctx[10]
    			]));

    			if ('value' in input_data) {
    				input.value = input_data.value;
    			}

    			toggle_class(input, "svelte-jot2oo", true);
    			if (dirty & /*options*/ 2 && t1_value !== (t1_value = /*label*/ ctx[23] + "")) set_data(t1, t1_value);

    			if (dirty & /*isDisabled, disabledOptions, options*/ 7 && label_disabled_value !== (label_disabled_value = /*isDisabled*/ ctx[0] || /*disabledOptions*/ ctx[2].includes(/*value*/ ctx[22]) || undefined)) {
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

    function create_fragment(ctx) {
    	let fieldset;
    	let legend;
    	let t0;
    	let t1;
    	let each_value = /*options*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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

    			attr(fieldset, "class", "" + (null_to_empty(/*fieldsetClasses*/ ctx[8]()) + " svelte-jot2oo"));
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

    			if (dirty & /*labelClasses, isDisabled, disabledOptions, options, undefined, labelSpanClasses, inputClasses, getType, checkedOptions, $$restProps*/ 1775) {
    				each_value = /*options*/ ctx[1];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
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

    function instance($$self, $$props, $$invalidate) {
    	const omit_props_names = [
    		"isFieldset","isInline","isDisabled","options","disabledOptions","checkedOptions","legendLabel","type","size"
    	];

    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	const TYPE = ["checkbox", "radio"];
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
    			$$invalidate(11, type = "checkbox");
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

    	const fieldsetClasses = () => {
    		let klasses = [
    			type ? `${type}-group` : "",
    			// we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
    			size === "large" ? `${type}-group-${size}` : "",
    			isFieldset === false ? `${type}-group-hidden` : ""
    		];

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
    		$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('isFieldset' in $$new_props) $$invalidate(12, isFieldset = $$new_props.isFieldset);
    		if ('isInline' in $$new_props) $$invalidate(13, isInline = $$new_props.isInline);
    		if ('isDisabled' in $$new_props) $$invalidate(0, isDisabled = $$new_props.isDisabled);
    		if ('options' in $$new_props) $$invalidate(1, options = $$new_props.options);
    		if ('disabledOptions' in $$new_props) $$invalidate(2, disabledOptions = $$new_props.disabledOptions);
    		if ('checkedOptions' in $$new_props) $$invalidate(3, checkedOptions = $$new_props.checkedOptions);
    		if ('legendLabel' in $$new_props) $$invalidate(4, legendLabel = $$new_props.legendLabel);
    		if ('type' in $$new_props) $$invalidate(11, type = $$new_props.type);
    		if ('size' in $$new_props) $$invalidate(14, size = $$new_props.size);
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
    		fieldsetClasses,
    		inputClasses,
    		$$restProps,
    		type,
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
    		if (!document.getElementById("svelte-jot2oo-style")) add_css();

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			isFieldset: 12,
    			isInline: 13,
    			isDisabled: 0,
    			options: 1,
    			disabledOptions: 2,
    			checkedOptions: 3,
    			legendLabel: 4,
    			type: 11,
    			size: 14
    		});
    	}
    }

    var ChoiceInput$1 = ChoiceInput;

    exports.Button = Button$1;
    exports.ButtonGroup = ButtonGroup$1;
    exports.Card = Card$1;
    exports.ChoiceInput = ChoiceInput$1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
