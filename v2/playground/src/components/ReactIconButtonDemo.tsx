/**
 * ReactIconButton Component Demo
 * Demonstrates React integration with the AgnosticUI IconButton component
 */

import React, { useState } from 'react';
import { ReactIconButton } from 'agnosticui-core/icon-button/react';
import { Edit3, Info, Trash2, Save, X, Ban, ChevronDown, Settings, Download, Upload, Heart, Star, Bookmark } from 'lucide-react';

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
      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--ag-text-primary)' }}>
        Interactive React IconButton Demo
      </h3>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--ag-text-secondary)' }}>
          Basic Actions
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReactIconButton
            label="Edit item"
            variant="primary"
            onClick={handleEdit}
          >
            <Edit3 size={24} />
          </ReactIconButton>
          <ReactIconButton
            label="Information"
            variant="secondary"
            onClick={handleInfo}
          >
            <Info size={24} />
          </ReactIconButton>
          <ReactIconButton
            label="Delete item"
            variant="danger"
            onClick={handleDelete}
          >
            <Trash2 size={24} />
          </ReactIconButton>
          <ReactIconButton
            label={isLoading ? 'Saving...' : 'Save'}
            variant="primary"
            loading={isLoading}
            disabled={isLoading}
            onClick={handleSave}
          >
            <Save size={24} />
          </ReactIconButton>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--ag-text-secondary)' }}>
          Toggle Favorites
        </h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactIconButton
              label={favorites.heart ? 'Remove from favorites' : 'Add to favorites'}
              variant={favorites.heart ? 'primary' : 'ghost'}
              onClick={() => handleFavoriteToggle('heart')}
              pressed={favorites.heart}
            >
              <Heart size={24} />
            </ReactIconButton>
            <small style={{ color: 'var(--ag-text-secondary)', fontSize: '0.75rem' }}>
              {favorites.heart ? 'Favorited' : 'Not favorited'}
            </small>
          </span>

          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactIconButton
              label={favorites.star ? 'Remove star' : 'Add star'}
              variant={favorites.star ? 'secondary' : 'ghost'}
              onClick={() => handleFavoriteToggle('star')}
              pressed={favorites.star}
            >
              <Star size={24} />
            </ReactIconButton>
            <small style={{ color: 'var(--ag-text-secondary)', fontSize: '0.75rem' }}>
              {favorites.star ? 'Starred' : 'Not starred'}
            </small>
          </span>

          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ReactIconButton
              label={favorites.bookmark ? 'Remove bookmark' : 'Add bookmark'}
              variant="ghost"
              onClick={() => handleFavoriteToggle('bookmark')}
              pressed={favorites.bookmark}
            >
              <Bookmark size={24} />
            </ReactIconButton>
            <small style={{ color: 'var(--ag-text-secondary)', fontSize: '0.75rem' }}>
              {favorites.bookmark ? 'Bookmarked' : 'Not bookmarked'}
            </small>
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--ag-text-secondary)' }}>
          Different Sizes
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <ReactIconButton
            label="Extra small close"
            size="xs"
            onClick={() => addAction('XS button clicked')}
          >
            <X size={16} />
          </ReactIconButton>
          <ReactIconButton
            label="Small close"
            size="sm"
            onClick={() => addAction('Small button clicked')}
          >
            <X size={18} />
          </ReactIconButton>
          <ReactIconButton
            label="Medium close"
            size="md"
            onClick={() => addAction('Medium button clicked')}
          >
            <X size={24} />
          </ReactIconButton>
          <ReactIconButton
            label="Large close"
            size="lg"
            onClick={() => addAction('Large button clicked')}
          >
            <X size={32} />
          </ReactIconButton>
          <ReactIconButton
            label="Extra large close"
            size="xl"
            onClick={() => addAction('XL button clicked')}
          >
            <X size={36} />
          </ReactIconButton>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--ag-text-secondary)' }}>
          Custom SVG Icons
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReactIconButton
            label="Settings"
            variant="secondary"
            onClick={() => addAction('Settings opened')}
          >
            <Settings size={24} />
          </ReactIconButton>

          <ReactIconButton
            label="Download"
            variant="primary"
            onClick={() => addAction('Download started')}
          >
            <Download size={24} />
          </ReactIconButton>

          <ReactIconButton
            label="Upload"
            variant="secondary"
            onClick={() => addAction('Upload dialog opened')}
          >
            <Upload size={24} />
          </ReactIconButton>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--ag-text-secondary)' }}>
          States Demo
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReactIconButton
            label="Disabled button"
            disabled
            onClick={() => addAction('This should not fire')}
          >
            <Ban size={24} />
          </ReactIconButton>
          <ReactIconButton
            label="Pressed state"
            pressed
            variant="secondary"
            onClick={() => addAction('Pressed button clicked')}
          >
            <ChevronDown size={24} />
          </ReactIconButton>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: 'var(--ag-text-secondary)' }}>
          Action Log
          <button
            onClick={clearActions}
            disabled={actions.length === 0}
            style={{
              marginLeft: '1rem',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              background: 'var(--ag-background-secondary)',
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
            <p style={{ margin: 0, color: 'var(--ag-text-secondary)', fontStyle: 'italic' }}>
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
                    color: 'var(--ag-text-primary)'
                  }}
                >
                  {action}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--ag-background-secondary)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--ag-text-secondary)' }}>
        <strong>React Integration Features:</strong> Type-safe props, React event handlers, state management,
        and seamless integration with React's component lifecycle while maintaining the accessibility
        and performance of the underlying web component.
      </div>
    </div>
  );
}