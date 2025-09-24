/**
 * ReactIconButton Component Demo
 * Demonstrates React integration with the AgnosticUI IconButton component
 */

import React, { useState } from 'react';
import { ReactIconButton } from 'agnosticui-core/icon-button/react';
import { Edit3, Info, Trash2, Save, X, Ban, RotateCw, ChevronDown } from 'lucide-react';

export default function ReactIconButtonDemo() {
  const [actions, setActions] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({
    heart: false,
    star: false,
    bookmark: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  function addAction(message: string) {
    setActions(prev => [
      `${new Date().toLocaleTimeString()}: ${message}`,
      ...prev.slice(0, 9) // Keep last 10 actions
    ]);
  }

  function handleFavoriteToggle(type: string) {
    setFavorites(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    addAction(`${type} ${favorites[type] ? 'removed from' : 'added to'} favorites`);
  }

  async function handleSave() {
    if (isLoading) return;

    setIsLoading(true);
    addAction('Save operation started...');

    // Simulate async operation
    setTimeout(() => {
      setIsLoading(false);
      addAction('Save completed successfully!');
    }, 2000);
  }

  function handleEdit() {
    addAction('Edit mode activated');
  }

  function handleDelete() {
    if (confirm('Are you sure you want to delete this item?')) {
      addAction('Item deleted');
    } else {
      addAction('Delete cancelled');
    }
  }

  function handleInfo() {
    addAction('Info dialog opened');
  }

  function clearActions() {
    setActions([]);
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--c-text)' }}>
        Interactive React IconButton Demo
      </h3>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--c-text-light)' }}>
          Basic Actions
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReactIconButton
            label="Edit item"
            variant="primary"
            onClick={handleEdit}
          >
            <Edit3 size={16} />
          </ReactIconButton>
          <ReactIconButton
            label="Information"
            variant="secondary"
            onClick={handleInfo}
          >
            <Info size={16} />
          </ReactIconButton>
          <ReactIconButton
            label="Delete item"
            variant="danger"
            onClick={handleDelete}
          >
            <Trash2 size={16} />
          </ReactIconButton>
          <ReactIconButton
            label={isLoading ? 'Saving...' : 'Save'}
            variant="primary"
            loading={isLoading}
            disabled={isLoading}
            onClick={handleSave}
          >
            <Save size={16} />
          </ReactIconButton>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--c-text-light)' }}>
          Toggle Favorites
        </h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactIconButton
              label={favorites.heart ? 'Remove from favorites' : 'Add to favorites'}
              unicode={favorites.heart ? '❤️' : '♡'}
              variant={favorites.heart ? 'primary' : 'ghost'}
              onClick={() => handleFavoriteToggle('heart')}
              pressed={favorites.heart}
            />
            <small style={{ color: 'var(--c-text-light)', fontSize: '0.75rem' }}>
              {favorites.heart ? 'Favorited' : 'Not favorited'}
            </small>
          </span>

          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactIconButton
              label={favorites.star ? 'Remove star' : 'Add star'}
              unicode={favorites.star ? '★' : '☆'}
              variant={favorites.star ? 'secondary' : 'ghost'}
              onClick={() => handleFavoriteToggle('star')}
              pressed={favorites.star}
            />
            <small style={{ color: 'var(--c-text-light)', fontSize: '0.75rem' }}>
              {favorites.star ? 'Starred' : 'Not starred'}
            </small>
          </span>

          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactIconButton
              label={favorites.bookmark ? 'Remove bookmark' : 'Add bookmark'}
              unicode={favorites.bookmark ? '🔖' : '🏷'}
              variant="ghost"
              onClick={() => handleFavoriteToggle('bookmark')}
              pressed={favorites.bookmark}
            />
            <small style={{ color: 'var(--c-text-light)', fontSize: '0.75rem' }}>
              {favorites.bookmark ? 'Bookmarked' : 'Not bookmarked'}
            </small>
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--c-text-light)' }}>
          Different Sizes
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <ReactIconButton
            label="Extra small close"
            size="xs"
            onClick={() => addAction('XS button clicked')}
          >
            <X size={12} />
          </ReactIconButton>
          <ReactIconButton
            label="Small close"
            size="sm"
            onClick={() => addAction('Small button clicked')}
          >
            <X size={14} />
          </ReactIconButton>
          <ReactIconButton
            label="Medium close"
            size="md"
            onClick={() => addAction('Medium button clicked')}
          >
            <X size={16} />
          </ReactIconButton>
          <ReactIconButton
            label="Large close"
            size="lg"
            onClick={() => addAction('Large button clicked')}
          >
            <X size={18} />
          </ReactIconButton>
          <ReactIconButton
            label="Extra large close"
            size="xl"
            onClick={() => addAction('XL button clicked')}
          >
            <X size={20} />
          </ReactIconButton>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--c-text-light)' }}>
          Custom SVG Icons
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReactIconButton
            label="Settings"
            variant="secondary"
            onClick={() => addAction('Settings opened')}
          >
            <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}>
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
          </ReactIconButton>

          <ReactIconButton
            label="Download"
            variant="primary"
            onClick={() => addAction('Download started')}
          >
            <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}>
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
            </svg>
          </ReactIconButton>

          <ReactIconButton
            label="Upload"
            variant="secondary"
            onClick={() => addAction('Upload dialog opened')}
          >
            <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}>
              <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"/>
            </svg>
          </ReactIconButton>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--c-text-light)' }}>
          States Demo
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReactIconButton
            label="Disabled button"
            disabled
            onClick={() => addAction('This should not fire')}
          >
            <Ban size={16} />
          </ReactIconButton>
          <ReactIconButton
            label="Loading spinner"
            loading
            variant="primary"
          >
            <RotateCw size={16} />
          </ReactIconButton>
          <ReactIconButton
            label="Pressed state"
            pressed
            variant="secondary"
            onClick={() => addAction('Pressed button clicked')}
          >
            <ChevronDown size={16} />
          </ReactIconButton>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--c-text-light)' }}>
          Action Log
          <button
            onClick={clearActions}
            disabled={actions.length === 0}
            style={{
              marginLeft: '1rem',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              background: 'var(--c-bg-secondary)',
              border: '1px solid var(--c-border)',
              borderRadius: '4px',
              cursor: actions.length === 0 ? 'not-allowed' : 'pointer',
              opacity: actions.length === 0 ? 0.5 : 1
            }}
          >
            Clear
          </button>
        </h4>
        <div
          style={{
            border: '1px solid var(--c-border)',
            borderRadius: '4px',
            padding: '1rem',
            background: 'var(--c-card-bg)',
            maxHeight: '200px',
            overflowY: 'auto'
          }}
        >
          {actions.length === 0 ? (
            <p style={{ margin: 0, color: 'var(--c-text-light)', fontStyle: 'italic' }}>
              No actions yet. Click some buttons above!
            </p>
          ) : (
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {actions.map((action, index) => (
                <li
                  key={index}
                  style={{
                    padding: '0.25rem 0',
                    borderBottom: index < actions.length - 1 ? '1px solid var(--c-border)' : 'none',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    color: 'var(--c-text)'
                  }}
                >
                  {action}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--c-bg-secondary)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--c-text-light)' }}>
        💡 <strong>React Integration Features:</strong> Type-safe props, React event handlers, state management,
        and seamless integration with React's component lifecycle while maintaining the accessibility
        and performance of the underlying web component.
      </div>
    </div>
  );
}