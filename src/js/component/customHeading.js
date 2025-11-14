import textSpark from 'url:../../assets/text-effect.svg';

class CustomHeading extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['tagname'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal === newVal) return;
    this.updateTagText();
  }

  get tagName() {
    return this.getAttribute('tagname');
  }

  set tagName(value) {
    this.setAttribute('tagname', value);
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          --color-green: #00693d;
        }
        .heading__highlight {
            color: var(--color-green);
            background-image: url('${textSpark}');
            background-position: 100% 0;
            background-repeat: no-repeat;
            background-size: 5rem;
            padding-right: 4rem;
            display: inline;
        }
      </style>
      <span class="heading__highlight">${this.tagName || 'nutritious.'}</span>
    `;

    this.root.innerHTML = '';
    this.root.appendChild(template.content.cloneNode(true));
  }

  updateTagText() {
    const textEl = this.root.querySelector('.heading__highlight');
    if (textEl) textEl.textContent = this.tagName || 'Default tag';
  }
}

customElements.define('custom-heading', CustomHeading);
