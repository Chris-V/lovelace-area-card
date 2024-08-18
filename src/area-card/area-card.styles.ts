import { css } from "lit";

export default css`
ha-card {
  position: relative;

  overflow: hidden;

  --primary-text-color: #DADADB;
  --secondary-text-color: #DADADB;
  --paper-item-icon-color: #DADADB;

  --mdc-theme-primary: #DADADB;
}

.root {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;

  color: var(--primary-text-color);

  --ha-card-background: rgba(0, 0, 0, 0);
  --ha-card-border-radius: 0;
  --ha-card-box-shadow: none;
}

.section {
  position: relative;

  padding: 5px;
}

.header {
  order: 1;

  display: flex;
  align-items: center;
  padding: 5px;

  background-color: rgba(0, 96, 15, 0.9);
}

.header .title {
  font-size: 1.6em;
  font-weight: 500;

  --mdc-icon-size: 32px;
}

.title state-badge {
  cursor: pointer;
}

.header .sensors {
  height: 100%;
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
}

.footer {
  order: 3;

  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5em;

  background-color: rgba(0, 0, 0, 0.6);
}

.section.panels {
  order: 2;
  flex-grow: 1;
  flex-shrink: 1;

  display: flex;
  overflow: auto hidden;
  padding: 0;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  --mdc-icon-size: 24px;
}

.panel {
  position: relative;
  height: 100%;
  width: 100%;
  flex-shrink: 0;

  display: block;
  box-sizing: border-box;
  padding: 5px;

  background-color: rgba(0, 0, 0, 0.55);

  scroll-snap-align: start;
}

.panel.empty-panel {
  background: none;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.55);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 96, 15, 0.55);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 96, 15, 1);
}
`;
