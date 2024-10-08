import { html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators";
import { classMap } from "lit/directives/class-map";
import { when } from "lit/directives/when";
import { ActionConfig, createDefaultActionConfig, handleAction } from "../helpers/action-handler";
import { actionHandler, ActionHandlerEvent } from "../helpers/action-handler-directive";
import { HomeAssistant } from "../types";
import styles from './entity-state-icon.styles';

@customElement('entity-state-icon')
export class EntityStateIcon extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property() entity?: string;
  @property() icon?: string;
  @property() name?: string;
  @property() showName?: boolean;
  @property() showState?: boolean;
  @property() state?: string;
  @property() tag?: string;
  @property({ attribute: false }) tap?: ActionConfig;
  @property({ attribute: false }) hold?: ActionConfig;

  static styles = styles;

  protected render() {
    const hass = this.hass;
    if (!this.entity || !hass) {
      return nothing;
    }

    const state = hass.states[this.entity];
    if (!state) {
      return html`<hui-warning-element></hui-warning-element>`;
    }

    const showName = !!this.showName;
    const showState = this.showState ?? this.entity.startsWith('sensor.');
    const name = this.name || state.attributes.friendly_name || this.entity;
    const isActive = state.state === 'on' || state.attributes['heating'] === true;

    return html`
      <div
        class=${classMap({ root: true, active: isActive })}
        tabindex=${this.tap?.action !== 'none' ? 0 : nothing}
        .title=${name}
        .actionHandler=${actionHandler({ hasHold: this.hold?.action !== 'none' })}
        @action=${this.handleAction}
      >
        <state-badge
          class="icon"
          .hass=${hass}
          .stateObj=${state}
          .overrideIcon=${this.icon}
          .stateColor=${true}
        ></state-badge>

        ${when(this.tag, () => html`
          <state-badge
            class="tag"
            .hass=${hass}
            .stateObj=${state}
            .overrideIcon=${this.tag}
            .stateColor=${true}
          ></state-badge>
        `)}

        ${when(showName, () => html`<div class="name">${name}</div>`)}

        ${when(showState, () => html`
          <div class="state">
            ${this.state ?? hass.formatEntityState(state)}
          </div>
        `)}
      </div>
    `;
  }

  private handleAction(event: ActionHandlerEvent) {
    if (!this.hass) {
      return;
    }

    const tap_action =
      this.entity?.startsWith('sensor.') || this.entity?.startsWith('binary_sensor.')
        ? createDefaultActionConfig('more-info', this.entity, this.tap)
        : createDefaultActionConfig('toggle', this.entity, this.tap);
    const hold_action = createDefaultActionConfig('more-info', this.entity, this.hold);

    handleAction(this, this.hass, { tap_action, hold_action }, event.detail.action);
  }
}
