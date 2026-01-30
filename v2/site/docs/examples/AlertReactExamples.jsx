import { useState } from "react";
import { ReactAlert } from "agnosticui-core/alert/react";

export default function AlertReactExamples() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);

  const handleWarningDismiss = (event) => {
    console.log("Warning dismissed, variant:", event.detail.variant);
    setShowWarningAlert(false);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Alerts</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2">Default alert</ReactAlert>
        <ReactAlert className="mbe2" variant="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="error">
          Error alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="monochrome">
          Monochrome alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Bordered</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" bordered>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="error">
          Error alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="monochrome">
          Monochrome alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Bordered Left with Icon</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" borderedLeft>
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Default alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="success">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-success)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Success alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="info">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Info alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="primary">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Primary alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="warning">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-warning)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Warning alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="error">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-danger)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Error alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="danger">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-danger)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Danger alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="monochrome">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-text-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Monochrome alert
          </div>
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Rounded</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" rounded>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="error">
          Error alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="monochrome">
          Monochrome alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Dismissible</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Alerts can be dismissed by the user with a close button.
        </p>
      </div>
      <div className="stacked mbe4">
        {showSuccessAlert && (
          <ReactAlert
            className="mbe2"
            variant="success"
            dismissible
            onAlertDismiss={() => setShowSuccessAlert(false)}
          >
            <strong>Success!</strong> Your changes have been saved. Click the ×
            to dismiss.
          </ReactAlert>
        )}
        {!showSuccessAlert && (
          <button
            onClick={() => setShowSuccessAlert(true)}
            className="mbe2"
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Show Success Alert
          </button>
        )}

        {showWarningAlert && (
          <ReactAlert
            className="mbe2"
            variant="warning"
            dismissible
            rounded
            onAlertDismiss={handleWarningDismiss}
          >
            <strong>Warning!</strong> This action may have unintended
            consequences.
          </ReactAlert>
        )}
        {!showWarningAlert && (
          <button
            onClick={() => setShowWarningAlert(true)}
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Show Warning Alert
          </button>
        )}
      </div>

      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Customize alert appearance using CSS Shadow Parts without breaking
          encapsulation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAlert className="custom-gradient-alert mbe2">
          This alert uses a vibrant gradient background with custom shadows
        </ReactAlert>
        <ReactAlert className="custom-card-alert mbe2">
          Card-style alert with elevation and hover effect
        </ReactAlert>
      </div>

      {/* CSS Parts customization styles */}
      <style>{`
        /* Gradient alert style */
        .custom-gradient-alert::part(ag-alert) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: none;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
          font-weight: 600;
        }

        /* Card-style elevated alert */
        .custom-card-alert::part(ag-alert) {
          background: white;
          color: #333;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .custom-card-alert::part(ag-alert):hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
}
