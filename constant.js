import {  } from '../src/tabs';
import {displayEsignModal} from '../src/util-swal';

const createCustomButton = (label, className, spaceElementId, func) => {
  const spaceEl = kintone.app.record.getSpaceElement(spaceElementId);
  const btnEl = document.createElement('button');
  btnEl.classList.add(className);
  btnEl.innerText = label;
  btnEl.onclick = func;

  spaceEl.innerHTML = '';
  spaceEl.appendChild(btnEl);
}

const events = {
  onShow: [
    'app.record.index.show'
  ]
}

const buttons = [
  
  {
    label: 'Basic Client Information',
    className: 'tabButton',
    spaceElementId: 'tab1',
    func: ''
  }
]

export {
  createCustomButton,
  events,
  buttons
}