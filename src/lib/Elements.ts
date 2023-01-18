// My Elements helper
interface Options {
  textContent?: string,
  id?: string,
  className?:string,
  onClick?:()=> void,
  size?:number,
  children? : any,
  innerHTML?: any,
  name?: string,
  type?: string,
  placeholder?: string,
  src?: any,
  value?: string,
  checked?: boolean,
  href?: any,
  required?: boolean,
}
const Elements = {
  createButton({
    textContent = '', id = '', className = '', onClick,
  }: Options) {
    const button = document.createElement('button');
    button.textContent = textContent;
    button.id = id;
    button.className = className;
    if (onClick) {
      button.addEventListener('click', () => { onClick(); });
    }
    return button;
  },

  createButtonSecondary({
    textContent = '', id = '', className = '', onClick, children = [],
  } : Options) {
    const button = document.createElement('button');
    button.textContent = textContent;
    button.id = id;
    button.className = className;
    if (onClick) {
      button.addEventListener('click', () => { onClick(); });
    }
    if (children.length) {
      children.forEach((child: any) => {
        if (child instanceof Element) {
          button.appendChild(child);
        }
      });
    }
    return button;
  },

  createInput({
    id = '', className = '', type = 'text', name = '', placeholder = '', value = '', textContent = ' ', checked = false, required = false,
  }: Options) {
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.name = name;
    input.className = className;
    input.placeholder = placeholder;
    input.value = value;
    input.textContent = textContent;
    input.checked = checked;
    input.required = required;
    return input;
  },

  createContainer({
    id = '', className = '', innerHTML = '', children = [], onClick,
  }: Options) {
    const container = document.createElement('div');
    container.id = id;
    container.className = className;
    container.innerHTML = innerHTML;
    if (onClick) {
      container.addEventListener('click', () => { onClick(); });
    }
    if (children.length) {
      children.forEach((child: any) => {
        if (child instanceof Element) {
          container.appendChild(child);
        }
      });
    }
    return container;
  },

  createP({ textContent = ' ', id = '', className = '' }: Options) {
    const p = document.createElement('p');
    p.id = id;
    p.className = className;
    p.textContent = textContent;

    return p;
  },

  createBr() {
    const br = document.createElement('br');
    return br;
  },

  createSocialMediaButton({
    id = '', className = '', innerHTML, onClick,
  }: Options) {
    const socialMedia = document.createElement('i');
    socialMedia.id = id;
    socialMedia.className = className;
    socialMedia.innerHTML = innerHTML;
    if (onClick) {
      socialMedia.addEventListener('click', () => { onClick(); });
    }
    return socialMedia;
  },

  createLogo({ id = '', className = '', innerHTML = '' }: Options) {
    const logo = document.createElement('i');
    logo.id = id;
    logo.className = className;
    logo.innerHTML = innerHTML;

    return logo;
  },

  createForm({ id = '', className = '', children = [] }: Options) {
    const form = document.createElement('form');
    form.id = id;
    form.className = className;

    if (children.length) {
      children.forEach((child: any) => {
        if (child instanceof Element) {
          form.appendChild(child);
        }
      });
    }
    return form;
  },

  createCalendar({
    textContent = '', type = '', className = '', id = '', value = '', min = '', max = '', required = false,
  }) {
    const input = document.createElement('input');
    input.type = type;
    input.textContent = textContent;
    input.className = className;
    input.id = id;
    input.value = value;
    input.min = min;
    input.max = max;
    input.required = required;
    return input;
  },

  createTextarea({
    id = '', className = '', name = '', placeholder = '', value = '', textContent = ' ',
  }: Options) {
    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.name = name;
    textarea.className = className;
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.textContent = textContent;
    return textarea;
  },

  createLink({
    id = '', className = '', innerHTML = '', href = '', textContent = ' ',
  }: Options) {
    const link = document.createElement('a');
    link.id = id;
    link.className = className;
    link.innerHTML = innerHTML;
    link.href = href;
    link.textContent = textContent;
    return link;
  },

};

export default Elements;
