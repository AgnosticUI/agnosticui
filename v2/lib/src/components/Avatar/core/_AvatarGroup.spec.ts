import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AvatarGroup, Avatar } from './Avatar.js'; // <-- FIX: Pull elements together through Avatar.ts to trigger layout registry
import styles from './avatar-group-structure.module.css';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('AvatarGroup Structural Verification', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createAvatarGroup = async (innerAvatarsCount = 2) => {
    const group = new AvatarGroup();
    
    for (let i = 0; i < innerAvatarsCount; i++) {
      const avatar = new Avatar();
      avatar.text = `A${i}`;
      group.appendChild(avatar);
    }
    
    container.appendChild(group);
    await new Promise((resolve) => setTimeout(resolve, 0));
    return group;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const group = await createAvatarGroup();
      const results = await axe(group);
      expect(results).toHaveNoViolations();
    });
  });

  it('renders correctly with default wrapper tokens', async () => {
    const el = await createAvatarGroup();
    expect(el).toBeInstanceOf(AvatarGroup);
    
    const wrapper = el.shadowRoot?.querySelector('.ag-avatar-group');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.classList.contains(styles.avatarGroupWrapper)).toBe(true);
  });

  it('provisions slots for nested children elements cleanly', async () => {
    const el = await createAvatarGroup(3);
    const slot = el.shadowRoot?.querySelector('slot');
    expect(slot).toBeTruthy();
    
    const assignedNodes = slot?.assignedNodes();
    expect(assignedNodes?.length).toBe(3);
  });
});
