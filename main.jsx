/**@jsx h */
/**@jsxFragment Fragment */
import * as x from '@luwes/little-vdom';

const { h, render } = x;

class Component extends HTMLElement {
  constructor() {
    super();
  }
  #f = document.createDocumentFragment();

  update() {
    const el = this.render();
    x.render(el, this.#f);
  }

  connectedCallback() {
    this.parentElement.replaceChild(this.#f, this);
    this.update();
  }

  render() {}
}

class Counter extends (false ? Component : class {}) {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        Hello {this.state.count}
        <button
          onClick={() => {
            this.state.count++;
            this.update();
          }}
        >
          ++
        </button>
      </div>
    );
  }
}

customElements.define('x-counter', Counter);
