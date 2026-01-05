import {
  ReactTimeline,
  ReactTimelineItem,
} from "agnosticui-core/timeline/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactCard } from "agnosticui-core/card/react";
import { ReactButton } from "agnosticui-core/button/react";
import { ReactBadge } from "agnosticui-core/badge/react";
import { ReactIconButton } from "agnosticui-core/icon-button/react";
import { ReactSpinner } from "agnosticui-core/spinner/react";

const cardStyle = {
  border: "1px solid var(--ag-border)",
  padding: "var(--ag-space-2)",
  borderRadius: "var(--ag-radius)",
  backgroundColor: "var(--ag-background)",
  marginBottom: "var(--ag-space-4)",
};

export default function TimelineReactExamples() {
  return (
    <section>
      {/* Horizontal Timeline */}
      <div className="mbe4">
        <h2>Horizontal Timeline</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="horizontal" responsive={false}>
          <ReactTimelineItem>
            <div slot="ag-start">2023-01-01</div>
            <div slot="ag-marker">
              <ReactIcon type="success" size="18">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">Step 1 Completed</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">2023-02-01</div>
            <div slot="ag-marker">
              <ReactIcon type="info" size="18">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                  />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">Step 2 In Progress</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">2023-03-01</div>
            <div slot="ag-marker">
              <ReactIcon type="warning" size="18">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                  />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">Step 3 Pending</div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical Timeline */}
      <div className="mbe4">
        <h2>Vertical Timeline</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="vertical" variant="primary">
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <strong>Breakfast</strong>
              <p>Oatmeal and coffee</p>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <strong>Meeting</strong>
              <p>Daily standup</p>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">11:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <strong>Work</strong>
              <p>Focus time</p>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical with Card at End */}
      <div className="mbe4">
        <h2>Vertical with Card at End</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{ "--ag-timeline-end-align": "center" }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Breakfast</strong>
                <p style={{ margin: 0 }}>Oatmeal and coffee</p>
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Meeting</strong>
                <p style={{ margin: 0 }}>Daily standup</p>
              </div>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical with Card at Start */}
      <div className="mbe4">
        <h2>Vertical with Card at Start</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{ "--ag-timeline-start-align": "center" }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Breakfast</strong>
                <p style={{ margin: 0 }}>Oatmeal and coffee</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">09:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Meeting</strong>
                <p style={{ margin: 0 }}>Daily standup</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">10:00 AM</div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical Alternating */}
      <div className="mbe4">
        <h2>Vertical Alternating</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{
            "--ag-timeline-start-align": "center",
            "--ag-timeline-end-align": "center",
          }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Step 1</strong>
                <p style={{ margin: 0 }}>Start with a card</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">09:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">10:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Step 2</strong>
                <p style={{ margin: 0 }}>End has the card</p>
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div style={cardStyle}>
                <strong>Step 3</strong>
                <p style={{ margin: 0 }}>Back to start card</p>
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">11:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">12:00 PM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div style={cardStyle}>
                <strong>Step 4</strong>
                <p style={{ margin: 0 }}>End has the card</p>
              </div>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Vertical Rich */}
      <div className="mbe4">
        <h2>Vertical Rich</h2>
      </div>
      <div className="mbe4">
        <ReactTimeline
          orientation="vertical"
          variant="primary"
          style={{
            "--ag-timeline-end-align": "center",
            "--ag-timeline-start-align": "center",
          }}
        >
          <ReactTimelineItem>
            <div slot="ag-start">09:00 AM</div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <ReactCard animated rounded="md">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--ag-space-2)",
                  }}
                >
                  <strong>Project Kickoff</strong>
                  <ReactBadge variant="success">New</ReactBadge>
                </div>
                <p style={{ margin: "0 0 var(--ag-space-2) 0" }}>
                  Initial meeting with the stakeholders to define the project
                  scope.
                </p>
                <ReactButton variant="primary" shape="rounded" size="sm">
                  View Details
                </ReactButton>
              </ReactCard>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <ReactCard animated rounded="md">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--ag-space-2)",
                  }}
                >
                  <strong>Design Review</strong>
                  <ReactBadge variant="info">In Progress</ReactBadge>
                </div>
                <p style={{ margin: "0 0 var(--ag-space-2) 0" }}>
                  Reviewing the initial mockups with the design team.
                </p>
                <div style={{ display: "flex", gap: "var(--ag-space-1)" }}>
                  <ReactButton variant="primary" shape="rounded" size="sm">
                    Approve
                  </ReactButton>
                  <ReactButton
                    variant="primary"
                    shape="rounded"
                    size="sm"
                    bordered
                  >
                    Reject
                  </ReactButton>
                </div>
              </ReactCard>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--ag-primary)",
                }}
              ></div>
            </div>
            <div slot="ag-end">11:00 AM</div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">02:00 PM</div>
            <div slot="ag-marker">
              <ReactIcon type="warning" size="24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
              </ReactIcon>
            </div>
            <div slot="ag-end">
              <ReactCard animated rounded="md">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--ag-space-2)",
                    marginBottom: "var(--ag-space-2)",
                  }}
                >
                  <strong>Client Call</strong>
                  <ReactIconButton size="sm" label="Call Client">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z" />
                    </svg>
                  </ReactIconButton>
                </div>
                <p style={{ margin: 0 }}>
                  Discuss feedback on the latest release.
                </p>
              </ReactCard>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>

      {/* Order Tracking Timeline */}
      <div className="mbe4">
        <h2>Order Tracking Timeline</h2>
        <p
          style={{
            color: "var(--ag-text-secondary)",
            fontSize: "0.875rem",
            marginTop: "0.5rem",
          }}
        >
          A real-world e-commerce order tracking timeline with custom bordered
          markers and integrated components.
        </p>
      </div>
      <div className="mbe4">
        <ReactTimeline orientation="vertical" variant="monochrome">
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-background-primary-inverted)",
                  fontWeight: 500,
                }}
              >
                Order Placed
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                Mar 15, 2024 10:32 AM
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-background-primary-inverted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style={{ color: "var(--ag-background-primary-inverted)" }}
                  />
                </svg>
              </div>
            </div>
            <div slot="ag-end">
              <ReactCard
                style={{
                  background: "var(--ag-background-primary)",
                  borderColor: "var(--ag-background-primary-inverted)",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--ag-background-primary-inverted)",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      Order #AG-2024-7821
                    </div>
                    <div
                      style={{
                        color: "var(--ag-text-secondary)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Thank you for your purchase!
                    </div>
                  </div>
                  <ReactBadge
                    type="success"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    Confirmed
                  </ReactBadge>
                </div>
                <div
                  style={{
                    color: "var(--ag-text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Items: 3 • Total: $127.98
                </div>
                <ReactButton
                  mode="secondary"
                  size="small"
                  style={{
                    width: "100%",
                    "--ag-button-bgcolor": "transparent",
                    "--ag-button-border-color":
                      "var(--ag-background-primary-inverted)",
                    "--ag-button-color": "var(--ag-background-primary-inverted)",
                  }}
                >
                  View Order Details
                </ReactButton>
              </ReactCard>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-background-primary-inverted)",
                  fontWeight: 500,
                }}
              >
                Payment Verified
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                Mar 15, 2024 10:33 AM
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-background-primary-inverted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                    style={{ color: "var(--ag-background-primary-inverted)" }}
                  />
                </svg>
              </div>
            </div>
            <div slot="ag-end">
              <div
                style={{
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.9rem",
                  paddingLeft: "0.5rem",
                }}
              >
                Payment of $127.98 confirmed via ****-4242
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-background-primary-inverted)",
                  fontWeight: 500,
                }}
              >
                Processing
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                Mar 15, 2024 2:15 PM
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-background-primary-inverted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ReactSpinner
                  size="small"
                  style={{
                    "--ag-spinner-color":
                      "var(--ag-background-primary-inverted)",
                    width: "14px",
                    height: "14px",
                  }}
                />
              </div>
            </div>
            <div slot="ag-end">
              <ReactCard
                style={{
                  background: "var(--ag-background-primary)",
                  borderColor: "var(--ag-background-primary-inverted)",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                <div
                  style={{
                    color: "var(--ag-background-primary-inverted)",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  Your order is being prepared
                </div>
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  <ReactBadge
                    type="info"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    Wireless Headphones
                  </ReactBadge>
                  <ReactBadge
                    type="info"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    USB-C Cable
                  </ReactBadge>
                  <ReactBadge
                    type="info"
                    style={{ "--ag-badge-font-size": "0.75rem" }}
                  >
                    Phone Case
                  </ReactBadge>
                </div>
              </ReactCard>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Shipped
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                Estimated: Mar 16
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-border)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div
                style={{
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.9rem",
                  paddingLeft: "0.5rem",
                  fontStyle: "italic",
                }}
              >
                Awaiting shipment pickup...
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Out for Delivery
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                Estimated: Mar 18
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-border)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <div
                style={{
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.9rem",
                  paddingLeft: "0.5rem",
                }}
              >
                Your package is on the way
              </div>
            </div>
          </ReactTimelineItem>
          <ReactTimelineItem>
            <div slot="ag-start">
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Delivered
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                Estimated: Mar 19
              </div>
            </div>
            <div slot="ag-marker">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ag-background-primary)",
                  border: "2px solid var(--ag-border)",
                }}
              ></div>
            </div>
            <div slot="ag-end">
              <ReactCard
                style={{
                  background: "var(--ag-background-subtle)",
                  borderColor: "var(--ag-border)",
                  marginBottom: "var(--ag-space-4)",
                }}
              >
                <div
                  style={{
                    color: "var(--ag-text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Package will be delivered to your address
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <ReactButton
                    mode="secondary"
                    size="small"
                    isDisabled
                    style={{ flex: 1 }}
                  >
                    Track Package
                  </ReactButton>
                  <ReactButton
                    mode="secondary"
                    size="small"
                    isDisabled
                    style={{ flex: 1 }}
                  >
                    Get Help
                  </ReactButton>
                </div>
              </ReactCard>
            </div>
          </ReactTimelineItem>
        </ReactTimeline>
      </div>
    </section>
  );
}