import { css } from "lit";

export default css`
.has-problems {
  --ha-card-border-color: var(--error-color);
  --ha-card-border-width: 2px;
  --state-binary_sensor-problem-on-color: var(--error-color);
}

.badges {
  flex-grow: 1;

  display: flex;
  justify-content: flex-end;
}

.control-panel {
  display: grid;
  gap: 4px;

  grid-template-columns: repeat(12, 1fr);

  --icon-size: 4.5em;
  --tag-color: var(--error-color);
  --tag-size: 1.5em;
  --name-size: 1em;
  --state-size: 0.8em;
}

.control-panel.count7, .control-panel.count8 {
  grid-template-columns: repeat(16, 1fr);
}

.control-panel > * {
  display: block;

  grid-column-end: span 4;
  place-self: center;
}

.control-panel:is(.count5, .count7, .count9) > *:first-child {
  grid-column-start: 3;
}

.control-panel.count5 > *:nth-child(n + 3) {
  grid-row-start: 2;
}

.control-panel:is(.count6, .count7) > *:nth-child(n + 4) {
  grid-row-start: 2;
}

.control-panel.count8 > *:nth-child(n + 5) {
  grid-row-start: 2;
}
`;
