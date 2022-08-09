import Swal from 'sweetalert2';
import { displayEmployeeAddModal } from './rxListModal';
import {
  addRecords
} from './util'

import {
  displayEsignModal
} from './util-swal'
import './tableRows';
import {vanillaSelectBox } from './vanillaSelectBox';
import '../src/css/desktop.css';
import '../src/css/vanillaSelectBox.css';
import tippy from 'tippy.js';
import format from 'date-fns/format';
import add from 'date-fns/add';
import 'tippy.js/dist/tippy.css';
import { createModal } from './main';
import Choices from 'choices.js';


// hide an element
const hide = (elem) => {
  elem.classList.add('hidden');
}

// show an element
const show = (elem) => {
  elem.classList.remove('hidden');
}

// toggle the element visibility
const toggle = (elem) => {
  elem.classList.toggle('hidden');
}

const toggleHidden = () => {
  var hidden = document.getElementsByClassName("hiddenRows");
        for(var i=0; i<= hidden.length; i++) {
          hidden[i].classList.remove("hiddenRows");
      }
  }

const checkVisible = (elem) => {
  window.getComputedStyle(document.getElementById(elem),null).getPropertyValue('display');
}


export const getRowHTML = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTMLkp = (mbNum,num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td id='buttonCol' class="table-num">
        ${num}
        
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTMLkp_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments) => {
  const rowHTML = `
      <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-dataShow">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTMLkp2 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td id='buttonCol' class="table-num">
        ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}



export const getRowHTMLkp2_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, comments) => {
  const rowHTML = `
      <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-dataShow">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}


export const getRowHTML2 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
    </tr>
  `
  return rowHTML;
}



export const getRowHTML3 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">
      
      </td>
      
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
    </tr>
  `
  return rowHTML;
}



export const getRowHTML4 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments) => {
  const rowHTML = `
  <tr id="tr-${mbNum}" class="tr">
      <td id='buttonCol' class="table-num">
        ${num}
        
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}




export const getRowHTML4_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-dataShow">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}


export const getRowHTML5 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
  
    </tr>
  `
  return rowHTML;
}

export const getRowHTML6 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-dataShow">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML6_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-dataShow">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML7 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML8 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML8_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, comments) => {
  const rowHTML = `
    <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML9 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
    
    </tr>
  `
  return rowHTML;
}
  
export const getRowHTML10 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML10_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments) => {
  const rowHTML = `
    <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML11 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML12 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML12_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments) => {
  const rowHTML = `
    <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}


export const getRowHTML13 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML14 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML14_hidden = (mbNum,num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments) => {
  const rowHTML = `
    <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML15 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML16 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments) => {
  const rowHTML = `
      <tr  id="tr-${mbNum}" data-toggle="collapse" data-target="#accordion" class="table-row">
      <td class="table-show">
        ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML16_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments) => {
  const rowHTML = `
      <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
        ${num}
      </td>
      <td class="table-data">
       ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML17 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, comments) => {
  const rowHTML = `
      <tr  id="tr-${mbNum}" data-toggle="hiddenRows" data-target="#accordion" class="table-row">
      <td class="table-show">
        ${num}
        </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML17_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
       <td class="table-show">
        ${num}
        </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML18 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML182 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML19 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" data-toggle="hiddenRows hidden" data-target="#accordion" class="table-row">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML20 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, comments) => {
  const rowHTML = `
   <tr id="tr-${mbNum}" data-toggle="hiddenRows hidden" data-target="#accordion" class="table-row">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}
export const getRowHTML19_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, comments) => {
  const rowHTML = `
    <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML20_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML192 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" data-toggle="hiddenRows hidden" data-target="#accordion" class="table-row">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML202 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11,  unmaster12, unmaster13, unmaster14, unmaster15,comments) => {
  const rowHTML = `
   <tr id="tr-${mbNum}" data-toggle="hiddenRows hidden" data-target="#accordion" class="table-row">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${unmaster15}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}
export const getRowHTML192_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments) => {
  const rowHTML = `
    <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML202_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, unmaster15, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${unmaster15}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML21 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML22 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_ag2 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">

      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_ag22 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, unmaster15) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${unmaster15}
      </td>
    </tr>
  `
  return rowHTML;
}


export const getRowHTML23 = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, unmaster15, unmaster16) => {
  const rowHTML = `
      <tr id="tr-${mbNum}" class="tr">
      <td class="table-data">

      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${unmaster15}
      </td>
      <td class="table-data skills">
      ${unmaster16}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML25 = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, comments) => {
  const rowHTML = `
    <tr id="tr-${mbNum}" data-toggle="hiddenRows hidden" data-target="#accordion" class="table-row">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_trix = (mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, comments) => {
  const rowHTML = `
    <tr  id="tr-${mbNum}" class="tr">
      <td class="table-show">
   
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML25_hidden = (mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, comments) => {
  const rowHTML = `
      <tr id="${mbNum}" colspan='3' id='accordian' class="hiddenRows hidden">
      <td class="table-show">
      ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
      
      <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${unmaster1}
      </td>
      <td class="table-data skills">
      ${unmaster2}
      </td>
      <td class="table-data skills">
      ${unmaster3}
      </td>
      <td class="table-data skills">
      ${unmaster4}
      </td>
      <td class="table-data skills">
      ${unmaster5}
      </td>
      <td class="table-data skills">
      ${unmaster6}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
      <td class="table-data skills">
      ${unmaster7}
      </td>
      <td class="table-data skills">
      ${unmaster8}
      </td>
      <td class="table-data skills">
      ${unmaster9}
      </td>
      <td class="table-data skills">
      ${unmaster10}
      </td>
      <td class="table-data skills">
      ${unmaster11}
      </td>
      <td class="table-data skills">
      ${unmaster12}
      </td>
      <td class="table-data skills">
      ${unmaster13}
      </td>
      <td class="table-data skills">
      ${unmaster14}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally = (mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, un12, un13, un14, un15, un16, un17, un18, un19, un20, un21, un22) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' id='accordian' class="rallyRows">
    <td class="table-show">
      -
      </td>
    <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
      <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
      <td class="table-data skills">
      ${un11}
      </td>
      <td class="table-data skills">
      ${un12}
      </td>
      <td class="table-data skills">
      ${un13}
      </td>
      <td class="table-data skills">
      ${un14}
      </td>
      <td class="table-data skills">
      ${un15}
      </td>
      <td class="table-data skills">
      ${un16}
      </td>
      <td class="table-data skills">
      ${un17}
      </td>
      <td class="table-data skills">
      ${un18}
      </td>
      <td class="table-data skills">
      ${un19}
      </td>
      <td class="table-data skills">
      ${un20}
      </td>
      <td class="table-data skills">
      ${un21}
      </td>
      <td class="table-data skills">
      ${un22}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML2_rally = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, un12, un13, un14, un15, un16, un17, un18, un19, un20, un21, un22, comments) => {
  const rowHTML = `
  <tr id="tr-${mbNum}" colspan='3' id='accordian' class="rallyRows2">
    <td class="table-data">
    ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
     
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
      <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
      <td class="table-data skills">
      ${un11}
      </td>
      <td class="table-data skills">
      ${un12}
      </td>
      <td class="table-data skills">
      ${un13}
      </td>
      <td class="table-data skills">
      ${un14}
      </td>
      <td class="table-data skills">
      ${un15}
      </td>
      <td class="table-data skills">
      ${un16}
      </td>
      <td class="table-data skills">
      ${un17}
      </td>
      <td class="table-data skills">
      ${un18}
      </td>
      <td class="table-data skills">
      ${un19}
      </td>
      <td class="table-data skills">
      ${un20}
      </td>
      <td class="table-data skills">
      ${un21}
      </td>
      <td class="table-data skills">
      ${un22}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML2_rallyHdn = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, un12, un13, un14, un15, un16, un17, un18, un19, un20, un21, un22, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
  <td class="table-data">
  ${num}
    </td>
    <td class="table-data">
    ${dogName}
    </td>
  <td class="mindbody">
    ${mbNumHtml}
    </td>
   
    <td class="table-data skills">
    ${un1}
    </td>
    <td class="table-data skills">
    ${un2}
    </td>
    <td class="table-data skills">
    ${un3}
    </td>
    <td class="table-data skills">
    ${un4}
    </td>
    <td class="table-data skills">
    ${un5}
    </td>
    <td class="table-data skills">
    ${un6}
    </td>
    <td class="table-data skills">
    ${un7}
    </td>
    <td class="table-data skills">
    ${un8}
    </td>
    <td class="table-data skills">
    ${un9}
    </td>
    <td class="table-data skills">
    ${un10}
    </td>
    <td class="table-data skills">
    ${un11}
    </td>
    <td class="table-data skills">
    ${un12}
    </td>
    <td class="table-data skills">
    ${un13}
    </td>
    <td class="table-data skills">
    ${un14}
    </td>
    <td class="table-data skills">
    ${un15}
    </td>
    <td class="table-data skills">
    ${un16}
    </td>
    <td class="table-data skills">
    ${un17}
    </td>
    <td class="table-data skills">
    ${un18}
    </td>
    <td class="table-data skills">
    ${un19}
    </td>
    <td class="table-data skills">
    ${un20}
    </td>
    <td class="table-data skills">
    ${un21}
    </td>
    <td class="table-data skills">
    ${un22}
    </td>
    <td class="table-data skills">
    ${comments}
    </td>
  </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally3 = (mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' id='accordian' class="rallyRows">
    <td class="table-show">
      -
      </td>
    <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
      <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
      <td class="table-data skills">
      ${un11}
      </td>
     
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally3SK = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, comments) => {
  const rowHTML = `
  <tr id="tr-${mbNum}" colspan='3' id='accordian' class="rallyRows2">
    <td class="table-data">
    ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
     
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
      <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
      <td class="table-data skills">
      ${un11}
      </td>
     
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML3_rallyHdn = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
  <td class="table-data">
  ${num}
    </td>
    <td class="table-data">
    ${dogName}
    </td>
  <td class="mindbody">
    ${mbNumHtml}
    </td>
   
    <td class="table-data skills">
    ${un1}
    </td>
    <td class="table-data skills">
    ${un2}
    </td>
    <td class="table-data skills">
    ${un3}
    </td>
    <td class="table-data skills">
    ${un4}
    </td>
    <td class="table-data skills">
    ${un5}
    </td>
    <td class="table-data skills">
    ${un6}
    </td>
    <td class="table-data skills">
    ${un7}
    </td>
    <td class="table-data skills">
    ${un8}
    </td>
    <td class="table-data skills">
    ${un9}
    </td>
    <td class="table-data skills">
    ${un10}
    </td>
    <td class="table-data skills">
    ${un11}
    </td>
    
    <td class="table-data skills">
    ${comments}
    </td>
  </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally4 = (mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' id='accordian' class="rallyRows">
    <td class="table-show">
      -
      </td>
    <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
     
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally4SK = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, comments) => {
  const rowHTML = `
  <tr id="tr-${mbNum}" colspan='3' id='accordian' class="rallyRows2">
    <td class="table-data">
    ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
     
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
     
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML4_rallyHdn = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
  <td class="table-data">
  ${num}
    </td>
    <td class="table-data">
    ${dogName}
    </td>
  <td class="mindbody">
    ${mbNumHtml}
    </td>
   
    <td class="table-data skills">
    ${un1}
    </td>
    <td class="table-data skills">
    ${un2}
    </td>
    <td class="table-data skills">
    ${un3}
    </td>
    <td class="table-data skills">
    ${un4}
    </td>
    <td class="table-data skills">
    ${un5}
    </td>
    <td class="table-data skills">
    ${un6}
    </td>
    <td class="table-data skills">
    ${un7}
    </td>
    <td class="table-data skills">
    ${comments}
    </td>
  </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally5 = (mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' id='accordian' class="rallyRows">
    <td class="table-show">
      -
      </td>
    <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
      <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
     
    </tr>
  `
  return rowHTML;
}

export const getRowHTML_rally5SK = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7,un8, un9, un10, comments) => {
  const rowHTML = `
  <tr id="tr-${mbNum}" colspan='3' id='accordian' class="rallyRows2">
    <td class="table-data">
    ${num}
      </td>
      <td class="table-data">
      ${dogName}
      </td>
    <td class="mindbody">
      ${mbNumHtml}
      </td>
     
      <td class="table-data skills">
      ${un1}
      </td>
      <td class="table-data skills">
      ${un2}
      </td>
      <td class="table-data skills">
      ${un3}
      </td>
      <td class="table-data skills">
      ${un4}
      </td>
      <td class="table-data skills">
      ${un5}
      </td>
      <td class="table-data skills">
      ${un6}
      </td>
      <td class="table-data skills">
      ${un7}
      </td>
      <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
      <td class="table-data skills">
      ${comments}
      </td>
    </tr>
  `
  return rowHTML;
}

export const getRowHTML5_rallyHdn = (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, comments) => {
  const rowHTML = `
  <tr id="${mbNum}" colspan='3' data-toggle="collapse" data-target="#accordion" class="hiddenRows hidden">
  <td class="table-data">
  ${num}
    </td>
    <td class="table-data">
    ${dogName}
    </td>
  <td class="mindbody">
    ${mbNumHtml}
    </td>
   
    <td class="table-data skills">
    ${un1}
    </td>
    <td class="table-data skills">
    ${un2}
    </td>
    <td class="table-data skills">
    ${un3}
    </td>
    <td class="table-data skills">
    ${un4}
    </td>
    <td class="table-data skills">
    ${un5}
    </td>
    <td class="table-data skills">
    ${un6}
    </td>
    <td class="table-data skills">
    ${un7}
    </td>
    <td class="table-data skills">
      ${un8}
      </td>
      <td class="table-data skills">
      ${un9}
      </td>
      <td class="table-data skills">
      ${un10}
      </td>
    <td class="table-data skills">
    ${comments}
    </td>
  </tr>
  `
  return rowHTML;
}






export const handleKP1Table = async (records) => {
      var records = records;
        let tableRowsHTML = ``;
        let tableRowsHTML2 = ``;
        let multiHTML = ``;
        let allMb = [];
        let choicesArr = [];
        function skillFunc(currentValue, index){
         let val = currentValue.value;
         let label = currentValue.label;
          let optionHTML = `<option value="${val}">${val}</option>`
          multiHTML += optionHTML;
        }
        for (let i = 0; i < records.length; i++) {
          var skill1 = document.getElementById('skill1').innerText;
          var skill2 = document.getElementById('skill2').innerText;
          var skill3 = document.getElementById('skill3').innerText;
          var skill4 = document.getElementById('skill4').innerText;
          var skill5 = document.getElementById('skill5').innerText;
          var skill6 = document.getElementById('skill6').innerText;
          var skill7 = document.getElementById('skill7').innerText;
          var skill8 = document.getElementById('skill8').innerText;
          const record = records[i];
          const lastName = record.clientLastName.value;
          const dogName = record['dogName'].value + ' ' + lastName;
          const mbNum = record['MindBodyNum'].value;
          const recId = record.Record_number.value;
          const commNum = record.commCount.value;
          const lastComment = record.lastCom.value;
         let val =  {
            value: mbNum,
            label: mbNum + '-' + dogName,
            selected: true,
            disabled: false,
            customProperties: {
              description: lastComment
            }
          };
          choicesArr.push(val);
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
          allMb.push(mbNum);
          const skills = record['KinderPup1'].value
          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
   
            const rowHTML = getRowHTML(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8);
            tableRowsHTML += rowHTML;
            
            
        }
       

        var divTable = document.getElementById('table_tbody');
        divTable.innerHTML += `${tableRowsHTML}`;
        document.getElementById('kp1_table').appendChild(divTable);
          ////////////*** Manners 1: Skills Taught Table  ***/////////////////////////
        
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
        const mbNum = record['MindBodyNum'].value;
        const recId = record.Record_number.value;
        const commNum = record.commCount.value;
        const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></div></p></div>`;

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }

        const skillTable = record['kp1_history'].value.reverse();

        if (skillTable.length === 1) {
          var num = '--';
        } else if (skillTable.length > 1) {
          var num1 = '+ ' + skillTable.length;
          var commentCountDiv = ``
          var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
        }
          // for (let j = 0; j < skillTable.length; j++) {
            var tSkills = skillTable[0].value.KinderPup1_0.value;
            var dateTaught1 = skillTable[0].value.Date_4.value;
            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
            
            
            var comments = skillTable[0].value.Text_area_3.value
            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8;
            unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
            unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
            unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
            unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
            unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
            unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
            unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
            unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
  
              const rowHTML = getRowHTMLkp(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments);
              tableRowsHTML2 += rowHTML;
          // }
           if (skillTable.length >= 2) {
            //skillTable = skillTable.splice(1);
                num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
          for (let j = 0; j < skillTable.length; j++) {
            var tSkills = skillTable[j].value.KinderPup1_0.value;
            var dateTaught1 = skillTable[j].value.Date_4.value;
            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
            
            
            var comments = skillTable[j].value.Text_area_3.value
            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8;
            unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
            unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
            unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
            unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
            unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
            unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
            unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
            unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';

  
              const rowHTML = getRowHTMLkp_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments);
              tableRowsHTML2 += rowHTML;
            
          }
         }
        } 

        
      var divTable2 = document.getElementById('table_tbody2');
        divTable2.innerHTML += `${tableRowsHTML2}`         
        document.getElementById('kp1sk_table').appendChild(divTable2);      
      
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const commNum = record.commCount.value;
        const mbNum = record['MindBodyNum'].value;
        if (commNum > 0){
          const lastComment = record.lastCom.value;
          var allIcons = document.querySelectorAll('.commNum');
          var icons = [...allIcons];
          for (var n = 0; n < icons.length; n++) {
            var icon = icons[n];
            var iconId = icon.id;
            if (iconId === mbNum) {
              tippy(icon, {
                content: `${lastComment}`,
                arrow:true
              });
            }
          }
        }
      }
createModal();
////////////*** KP1: END Table  ***/////////////////////////
choicesArr.forEach(skillFunc);

var divFilter = document.getElementById('newFilter');
  divFilter.className = 'filterClass';
  divFilter.innerHTML += `${multiHTML}`;
  tippy(document.getElementById('updateBtn'), {
    content: `Bulk Update your class now`,
    arrow: true
  });
 document.querySelector('.mbFilter').style.zIndex = '100';
  let selectBox = new Choices("#newFilter", {
    "maxHeight": 180,
    "maxWidth": 350,
    allowHTML: true,
    searchEnabled: true, 
    duplicateItemsAllowed: false, 
    placeholderValue: "Filter by Mindbody#", 
    searchPlaceholderValue: "Search Mindbody#"
  });
 
  // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
  let allSelected = [];
  document.querySelector('#newFilter').addEventListener(
    'change',
    function(event) {
      var selected = event.detail.value;
      allSelected.push(selected);
      console.log(event.detail.value);
    },
    false,
  );
  let allChoices = [];
  
  document.querySelector('#newFilter').addEventListener(
    'choice',
    function(event) {
      // each time a choice is selected
      var choice = event.detail.choice;
      allChoices.push(choice);
      console.log(event.detail.choice);
    },
    false,
  );
  document.querySelector('#newFilter').style.visibility = 'hidden';
var submitButton = document.createElement('button');
submitButton.id = 'submit1';
submitButton.className = 'subButton5'
submitButton.innerHTML = `Submit Filters`;  

var clearButton = document.createElement('button');
clearButton.id = 'clear1';
clearButton.className = 'subButton5'
clearButton.innerHTML = `Clear Filters`;  

if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {

} else {
document.getElementById('topElement2').appendChild(divFilter);
document.querySelector('.choices').appendChild(submitButton);
document.querySelector('.choices').appendChild(clearButton);
}

document.getElementById('clear1').onclick = function() {
  handleKP1Table(records)
  removeHighlightedItems();
}

document.getElementById('submit1').onclick = function() {
  // var checked = document.querySelectorAll('#newFilter :checked');
  let mb = [];
  console.log('allSelected', allSelected);
  var select = document.getElementById('newFilter');
    var selected = [...select.options]
                    .filter(option => option.selected)
                    .map(option => option.value);
  //                   console.log('SELECTED:' , selected);
  function filterFromMindbody() {
    var tableData, tr, td, i;
    var filterParams = selected; //split by | to get array of search parameters
    var allTablesArr = [];
      if (window.getComputedStyle(document.querySelector('.kp1sk_container'),null).getPropertyValue('display') === 'none') {
        tableData = document.querySelector('.kp1_container');
      } else if (window.getComputedStyle(document.querySelector('.kp1_container'),null).getPropertyValue('display') === 'none') {
        tableData = document.querySelector('.kp1sk_container');
      } 

    tr = tableData.getElementsByTagName('tr');
    // For each table row, hide those who don't match the search text
    for (i = 0; i< tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
        if (td) {
            var tdValue = td.innerHTML;
            var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
            if ( isMatched.length ) //check length of filtered resultset
                tr[i].style.display = "";
            else
                tr[i].style.display = "none";
        }        
      }
    }
    
      filterFromMindbody();
      
  }         
}

export const handleKP2Table = async (records) => {
  var records = records;
    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    let choicesArr = [];
    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;
    let multiHTML = ``;
    let allMb = [];
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['KP2MSK'].value



          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';

        const rowHTML = getRowHTML2(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5);
        tableRowsHTML += rowHTML;
    }
      var divTable = document.getElementById('table_tbody');
      divTable.innerHTML += ` ${tableRowsHTML}`
      document.getElementById('kp2_table').appendChild(divTable);

//////////////////////////////////// KP2 Skills Taught  ////////////////////////////////////
for (let i = 0; i < records.length; i++) {
  const record = records[i];
  const lastName = record.clientLastName.value;
  const dogName = record['dogName'].value + ' ' + lastName;
  const mbNum = record['MindBodyNum'].value;
  const recId = record.Record_number.value;
  const commNum = record.commCount.value;
  const lastComment = record.lastCom.value;
    if (commNum >= 1){
      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

    } else {
      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
    }
  const skillTable = record['kp2sk'].value.reverse();
  if (skillTable.length === 1) {
    var num = '--';
  } else if (skillTable.length > 1) {
    var num1 = '+ ' + skillTable.length;
    var commentCountDiv = ``
    var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
  }

      var tSkills = skillTable[0].value.KP2MSK_1.value;
      var dateTaught1 = skillTable[0].value.Date_7.value;
      let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
     
      
      var comments = skillTable[0].value.Text_area_6.value
      var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5;
      unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
      unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
      unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
      unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
      unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
     
        const rowHTML = getRowHTMLkp2(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, comments);
        tableRowsHTML2 += rowHTML;
    // }
     if (skillTable.length >= 2) {
      //skillTable = skillTable.splice(1);
          num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
    for (let j = 0; j < skillTable.length; j++) {
      var tSkills = skillTable[j].value.KP2MSK_1.value;
      var dateTaught1 = skillTable[j].value.Date_7.value;
      let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
      
      
      var comments = skillTable[j].value.Text_area_6.value
      var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5;
      unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
      unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
      unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
      unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
      unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
    

        const rowHTML = getRowHTMLkp2_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, comments);
        tableRowsHTML2 += rowHTML;
      // }
    }
   }
  } 

var divTable2 = document.getElementById('table_tbody2');
  divTable2.innerHTML += `${tableRowsHTML2}`         
document.getElementById('kp2sk_table').appendChild(divTable2);  

for (let i = 0; i < records.length; i++) {
  const record = records[i];
  const commNum = record.commCount.value;
  const mbNum = record['MindBodyNum'].value;
  if (commNum > 0){
    const lastComment = record.lastCom.value;
    var allIcons = document.querySelectorAll('.commNum');
    var icons = [...allIcons];
    for (var n = 0; n < icons.length; n++) {
      var icon = icons[n];
      var iconId = icon.id;
      if (iconId === mbNum) {
        tippy(icon, {
          content: `${lastComment}`,
          arrow:true
        });
      }
    }
  }
}
createModal();
//////////////////////////////////// END KP2 Skills Taught  ////////////////////////////////////
choicesArr.forEach(skillFunc);

var divFilter = document.getElementById('newFilter');
  divFilter.className = 'filterClass';
  divFilter.innerHTML += `${multiHTML}`;
  tippy(document.getElementById('updateBtn'), {
    content: `Bulk Update your class now`,
    arrow: true
  });
 document.querySelector('.mbFilter').style.zIndex = '100';
  let selectBox = new Choices("#newFilter", {
    allowHTML: true,
    searchEnabled: true, 
    duplicateItemsAllowed: false, 
    placeholderValue: "Filter by Mindbody#", 
    searchPlaceholderValue: "Search Mindbody#"
  });
 
  // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
  let allSelected = [];
  document.querySelector('#newFilter').addEventListener(
    'change',
    function(event) {
      var selected = event.detail.value;
      allSelected.push(selected);
      console.log(event.detail.value);
    },
    false,
  );
  let allChoices = [];
  
  document.querySelector('#newFilter').addEventListener(
    'choice',
    function(event) {
      // each time a choice is selected
      var choice = event.detail.choice;
      allChoices.push(choice);
      console.log(event.detail.choice);
    },
    false,
  );
  document.querySelector('#newFilter').style.visibility = 'hidden';
var submitButton = document.createElement('button');
submitButton.id = 'submit1';
submitButton.className = 'subButton5'
submitButton.innerHTML = `Submit Filters`;  

var clearButton = document.createElement('button');
clearButton.id = 'clear1';
clearButton.className = 'subButton5'
clearButton.innerHTML = `Clear Filters`;  

if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {

} else {
document.getElementById('topElement2').appendChild(divFilter);
document.querySelector('.choices').appendChild(submitButton);
document.querySelector('.choices').appendChild(clearButton);
}

document.getElementById('clear1').onclick = function() {
  handleKP2Table(records)
  removeHighlightedItems();
}

document.getElementById('submit1').onclick = function() {
  // var checked = document.querySelectorAll('#newFilter :checked');
  let mb = [];
  console.log('allSelected', allSelected);
  var select = document.getElementById('newFilter');
    var selected = [...select.options]
                    .filter(option => option.selected)
                    .map(option => option.value);
  //                   console.log('SELECTED:' , selected);

  function filterFromMindbody() {
    var tableData, tr, td, i;
    var filterParams = selected; //split by | to get array of search parameters
    var allTablesArr = [];
      if (window.getComputedStyle(document.querySelector('.kp2sk_container'),null).getPropertyValue('display') === 'none') {
        tableData = document.querySelector('.kp2_container');
      } else if (window.getComputedStyle(document.querySelector('.kp2_container'),null).getPropertyValue('display') === 'none') {
        tableData = document.querySelector('.kp2sk_container');
      } 

    tr = tableData.getElementsByTagName('tr');
    // For each table row, hide those who don't match the search text
    for (i = 0; i< tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
        if (td) {
            var tdValue = td.innerHTML;
            var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
            if ( isMatched.length ) //check length of filtered resultset
                tr[i].style.display = "";
            else
                tr[i].style.display = "none";
        }        
      }
    }
    
      filterFromMindbody();
      
  }         
}

export const handleMan1Table = async (records) => {
  var records = records;

    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    var skill6 = document.getElementById('skill6').innerText;
    var skill7 = document.getElementById('skill7').innerText;
    var skill8 = document.getElementById('skill8').innerText;
    var skill9 = document.getElementById('skill9').innerText;
    var skill10 = document.getElementById('skill10').innerText;

    var tpskill1 = document.getElementById('tpskill1').innerText;
    var tpskill2 = document.getElementById('tpskill2').innerText;
    var tpskill3 = document.getElementById('tpskill3').innerText;
    var tpskill4 = document.getElementById('tpskill4').innerText;
    var tpskill5 = document.getElementById('tpskill5').innerText;
    var tpskill6 = document.getElementById('tpskill6').innerText;
    var tpskill7 = document.getElementById('tpskill7').innerText;
    var tpskill8 = document.getElementById('tpskill8').innerText;
    var tpskill9 = document.getElementById('tpskill9').innerText;

    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;
    let tableRowsHTML3 = ``;
    let multiHTML = ``;
    let allMb = [];
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** Manners 1: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      let skills = record['MP1MSK'].value
      var totalSkills_um = skills.length;

          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';

        const rowHTML = getRowHTML3(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10);
        tableRowsHTML += rowHTML;
        
      } 
      var divTable = document.getElementById('table_tbody');
        divTable.innerHTML += `${tableRowsHTML}`; 
      document.getElementById('man1_table').appendChild(divTable);
        
        ////////////*** Manners 1: Skills Taught Table  ***/////////////////////////
        
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
        const mbNum = record['MindBodyNum'].value;
        const recId = record.Record_number.value;
        const commNum = record.commCount.value;
        const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
        const skillTable = record['man1_skillsTaught'].value.reverse();

        if (skillTable.length === 1) {
          var num = '--';
        } else if (skillTable.length > 1) {
          var num1 = '+ ' + skillTable.length;
          var commentCountDiv = ``
          var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
        }
            var tSkills = skillTable[0].value.MP1MSK_2.value;
            var dateTaught1 = skillTable[0].value.man1_sk_taught_date.value;
            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
            
            
            var comments = skillTable[0].value.Text_area_8.value
            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8, unmaster9, unmaster10;
            unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
            unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
            unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
            unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
            unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
            unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
            unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
            unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
            unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
            unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';
  
              const rowHTML = getRowHTML4(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments);
              tableRowsHTML2 += rowHTML;
          // }
           if (skillTable.length >= 2) {
            //skillTable = skillTable.splice(1);
                num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
          for (let j = 0; j < skillTable.length; j++) {
            if(j > 0) {
            var tSkills = skillTable[j].value.MP1MSK_2.value;
            var dateTaught1 = skillTable[j].value.man1_sk_taught_date.value;
            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
            
            
            var comments = skillTable[j].value.Text_area_8.value
            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8, unmaster9, unmaster10;
            unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
            unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
            unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
            unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
            unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
            unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
            unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
            unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
            unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
            unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';
  
              const rowHTML = getRowHTML4_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments);
              tableRowsHTML2 += rowHTML;
           }
          }
         }
        } 

      var divTable2 = document.getElementById('table_tbody2');
        divTable2.innerHTML += `${tableRowsHTML2}`; 
      document.getElementById('man1sk_table').appendChild(divTable2);                       
////////////*** Manners 1: Talking Points Table  ***/////////////////////////

      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
  
        const mbNum = record['MindBodyNum'].value;
        const recId = record.Record_number.value;
        const commNum = record.commCount.value;
        const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
        let tp_skills = record['man1TP'].value
       
        var totalSkills_um = tp_skills.length;
  
            let unmaster1 = tp_skills.find((item) => item === tpskill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster2 = tp_skills.find((item) => item === tpskill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster3 = tp_skills.find((item) => item === tpskill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster4 = tp_skills.find((item) => item === tpskill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster5 = tp_skills.find((item) => item === tpskill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster6 = tp_skills.find((item) => item === tpskill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster7 = tp_skills.find((item) => item === tpskill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster8 = tp_skills.find((item) => item === tpskill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            let unmaster9 = tp_skills.find((item) => item === tpskill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
  
          const rowHTML = getRowHTML21(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10);
          tableRowsHTML3 += rowHTML;
          
        } 

        var divTable3 = document.getElementById('table_tbody3');
        divTable3.innerHTML += `${tableRowsHTML3}`; 
        document.getElementById('man1tp_table').appendChild(divTable3);  

        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const commNum = record.commCount.value;
          const mbNum = record['MindBodyNum'].value;
          if (commNum > 0){
            const lastComment = record.lastCom.value;
            var allIcons = document.querySelectorAll('.commNum');
            var icons = [...allIcons];
            for (var n = 0; n < icons.length; n++) {
              var icon = icons[n];
              var iconId = icon.id;
              if (iconId === mbNum) {
                tippy(icon, {
                  content: `${lastComment}`,
                  arrow:true
                });
              }
            }
          }
        }
        createModal();
     ////////////*** Manners 1: Filter  ***/////////////////////////

     choicesArr.forEach(skillFunc);

     var divFilter = document.getElementById('newFilter');
       divFilter.className = 'filterClass';
       divFilter.innerHTML += `${multiHTML}`;
       tippy(document.getElementById('updateBtn'), {
         content: `Bulk Update your class now`,
         arrow: true
       });
      document.querySelector('.mbFilter').style.zIndex = '100';
       let selectBox = new Choices("#newFilter", {
         allowHTML: true,
         searchEnabled: true, 
         duplicateItemsAllowed: false, 
         placeholderValue: "Filter by Mindbody#", 
         searchPlaceholderValue: "Search Mindbody#"
       });
      
       // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
       let allSelected = [];
       document.querySelector('#newFilter').addEventListener(
         'change',
         function(event) {
           var selected = event.detail.value;
           allSelected.push(selected);
           console.log(event.detail.value);
         },
         false,
       );
       let allChoices = [];
       
       document.querySelector('#newFilter').addEventListener(
         'choice',
         function(event) {
           // each time a choice is selected
           var choice = event.detail.choice;
           allChoices.push(choice);
           console.log(event.detail.choice);
         },
         false,
       );
       document.querySelector('#newFilter').style.visibility = 'hidden';
     var submitButton = document.createElement('button');
     submitButton.id = 'submit1';
     submitButton.className = 'subButton5'
     submitButton.innerHTML = `Submit Filters`;  
     
     var clearButton = document.createElement('button');
     clearButton.id = 'clear1';
     clearButton.className = 'subButton5'
     clearButton.innerHTML = `Clear Filters`;  
     
     if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
     
     } else {
     document.getElementById('topElement2').appendChild(divFilter);
     document.querySelector('.choices').appendChild(submitButton);
     document.querySelector('.choices').appendChild(clearButton);
     }
     
     document.getElementById('clear1').onclick = function() {
       handleMan1Table(records)
       removeHighlightedItems();
     }
     
     document.getElementById('submit1').onclick = function() {
       // var checked = document.querySelectorAll('#newFilter :checked');
       let mb = [];
       console.log('allSelected', allSelected);
       var select = document.getElementById('newFilter');
         var selected = [...select.options]
                         .filter(option => option.selected)
                         .map(option => option.value);
       //                   console.log('SELECTED:' , selected);
        function filterFromMindbody() {
          var tableData, tr, td, i;
          var filterParams = selected; //split by | to get array of search parameters
          var allTablesArr = [];
            if (window.getComputedStyle(document.querySelector('.man1sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man1tp_container'),null).getPropertyValue('display') === 'none') {
              tableData = document.querySelector('.man1_container');
            } else if (window.getComputedStyle(document.querySelector('.man1_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man1tp_container'),null).getPropertyValue('display') === 'none') {
              tableData = document.querySelector('.man1sk_container');
            } else if (window.getComputedStyle(document.querySelector('.man1_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man1sk_container'),null).getPropertyValue('display') === 'none') {
              tableData = document.querySelector('.man1tp_container');
            }
           
          tr = tableData.getElementsByTagName('tr');
          // For each table row, hide those who don't match the search text
          for (i = 0; i< tr.length; i++) {
              td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
              if (td) {
                  var tdValue = td.innerHTML;
                  var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                  if ( isMatched.length ) //check length of filtered resultset
                      tr[i].style.display = "";
                  else
                      tr[i].style.display = "none";
              }        
            }
          }
          
            filterFromMindbody();
            
        }         
    }
  

export const handleMan2_Table = async (records) => {
      var records = records;
        var skill1 = document.getElementById('skill1').innerText;
        var skill2 = document.getElementById('skill2').innerText;
        var skill3 = document.getElementById('skill3').innerText;
        var skill4 = document.getElementById('skill4').innerText;
        var skill5 = document.getElementById('skill5').innerText;
        var skill6 = document.getElementById('skill6').innerText;
        var skill7 = document.getElementById('skill7').innerText;
        var skill8 = document.getElementById('skill8').innerText;
        var skill9 = document.getElementById('skill9').innerText;
        var skill10 = document.getElementById('skill10').innerText;
    
        var tpskill1 = document.getElementById('tpskill1').innerText;
        var tpskill2 = document.getElementById('tpskill2').innerText;
        var tpskill3 = document.getElementById('tpskill3').innerText;
        var tpskill4 = document.getElementById('tpskill4').innerText;
        var tpskill5 = document.getElementById('tpskill5').innerText;
        var tpskill6 = document.getElementById('tpskill6').innerText;
        var tpskill7 = document.getElementById('tpskill7').innerText;
        var tpskill8 = document.getElementById('tpskill8').innerText;
        var tpskill9 = document.getElementById('tpskill9').innerText;
        var tpskill10 = document.getElementById('tpskill10').innerText;
        var tpskill11 = document.getElementById('tpskill11').innerText;
        var tpskill12 = document.getElementById('tpskill12').innerText;
    
        let tableRowsHTML = ``;
        let tableRowsHTML2 = ``;
        let tableRowsHTML3 = ``;
        let multiHTML = ``;
        let allMb = [];
        let choicesArr = [];
 
        function skillFunc(currentValue, index){
          let val = currentValue.value;
          let label = currentValue.label;
           let optionHTML = `<option value="${val}">${val}</option>`
           multiHTML += optionHTML;
         }
        
        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const mbNum = record['MindBodyNum'].value;
          allMb.push(mbNum);
        }
         ////////////*** Manners 2: Unmastered Skills Table  ***/////////////////////////
        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const lastName = record.clientLastName.value;
          const dogName = record['dogName'].value + ' ' + lastName;
          const mbNum = record['MindBodyNum'].value;
          const recId = record.Record_number.value;
          const commNum = record.commCount.value;
          const lastComment = record.lastCom.value;
          let val =  {
            value: mbNum,
            label: mbNum + '-' + dogName,
            selected: true,
            disabled: false,
            customProperties: {
              description: lastComment
            }
          };
          choicesArr.push(val);
            if (commNum >= 1){
              var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
  
            } else {
              var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
            }
          let skills = record['MP2MSK'].value
          var totalSkills_um = skills.length;
    
              let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ--';
              let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
    
              const rowHTML = getRowHTML5(mbNum,dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9);
              tableRowsHTML += rowHTML;
            
          } 
          var divTable = document.getElementById('table_tbody');
            divTable.innerHTML += `${tableRowsHTML}` ;
          document.getElementById('man2_table').appendChild(divTable);
            
            ////////////*** Manners 2: Skills Taught Table  ***/////////////////////////
          for (let i = 0; i < records.length; i++) {
            const record = records[i];
            const lastName = record.clientLastName.value;
            const dogName = record['dogName'].value + ' ' + lastName;
            const mbNum = record['MindBodyNum'].value;
            const recId = record.Record_number.value;
            const commNum = record.commCount.value;
            const lastComment = record.lastCom.value;
              if (commNum >= 1){
                var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                <div class='icon'><i class="fas fa-comment-alt"></i></div>
                <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
    
              } else {
                var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
              }
            let skillTable = record['Table_10'].value.reverse();
            console.log('st:', skillTable);
            if (skillTable.length === 1) {
              var num = '--';
            } else if (skillTable.length > 1) {
              var num1 = '+ ' + skillTable.length;
              var commentCountDiv = ``
              var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
            }
              
                var tSkills = skillTable[0].value.MP2MSK_1.value;
                var dateTaught1 = skillTable[0].value.Date_11.value;
                let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                
                
                var comments = skillTable[0].value.Text_area_10.value
                var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8, unmaster9, unmaster10;
                unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
                unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
      
                  const rowHTML = getRowHTML6(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                tableRowsHTML2 += rowHTML;
              // }

              if (skillTable.length >= 2) {
                // //skillTable = skillTable.splice(1);
                num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
              for (let j = 0; j < skillTable.length; j++) {
                if(j > 0) {
                var tSkills = skillTable[j].value.MP2MSK_1.value;
                var dateTaught1 = skillTable[j].value.Date_11.value;
                let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                var comments = skillTable[j].value.Text_area_10.value
                var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8, unmaster9;
                unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
                unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
      
                  const rowHTML = getRowHTML6_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                tableRowsHTML2 += rowHTML;
               }
              }
          }
        }
          var divTable2 = document.getElementById('table_tbody2');
            divTable2.innerHTML += `${tableRowsHTML2}` ;
          document.getElementById('man2sk_table').appendChild(divTable2);                       
    
    ////////////*** Manners 2: Talking Points Table  ***/////////////////////////
    
          for (let i = 0; i < records.length; i++) {
            const record = records[i];
            const lastName = record.clientLastName.value;
            const dogName = record['dogName'].value + ' ' + lastName;
            const mbNum = record['MindBodyNum'].value;
            const recId = record.Record_number.value;
            const commNum = record.commCount.value;
            const lastComment = record.lastCom.value;
              if (commNum >= 1){
                var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                <div class='icon'><i class="fas fa-comment-alt"></i></div>
                <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
    
              } else {
                var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
              }
            let tp_skills = record['MP2TPEG'].value
            var totalSkills_um = tp_skills.length;
      
                let unmaster1 = tp_skills.find((item) => item === tpskill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster2 = tp_skills.find((item) => item === tpskill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster3 = tp_skills.find((item) => item === tpskill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster4 = tp_skills.find((item) => item === tpskill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster5 = tp_skills.find((item) => item === tpskill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster6 = tp_skills.find((item) => item === tpskill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster7 = tp_skills.find((item) => item === tpskill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster8 = tp_skills.find((item) => item === tpskill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster9 = tp_skills.find((item) => item === tpskill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster10 = tp_skills.find((item) => item === tpskill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster11 = tp_skills.find((item) => item === tpskill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                let unmaster12 = tp_skills.find((item) => item === tpskill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      
              const rowHTML = getRowHTML22(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12);
              tableRowsHTML3 += rowHTML;
              
            } 
    
            var divTable3 = document.getElementById('table_tbody3');
              divTable3.innerHTML += `${tableRowsHTML3}`; 
            document.getElementById('man2tp_table').appendChild(divTable3);  
    
            for (let i = 0; i < records.length; i++) {
              const record = records[i];
              const commNum = record.commCount.value;
              const mbNum = record['MindBodyNum'].value;
              if (commNum > 0){
                const lastComment = record.lastCom.value;
                var allIcons = document.querySelectorAll('.commNum');
                var icons = [...allIcons];
                for (var n = 0; n < icons.length; n++) {
                  var icon = icons[n];
                  var iconId = icon.id;
                  if (iconId === mbNum) {
                    tippy(icon, {
                      content: `${lastComment}`,
                      arrow:true
                    });
                  }
                }
              }
            }
            createModal();
         ////////////*** Manners 1: Filter  ***/////////////////////////
         choicesArr.forEach(skillFunc);
         var divFilter = document.getElementById('newFilter');
           divFilter.className = 'filterClass';
           divFilter.innerHTML += `${multiHTML}`;
           tippy(document.getElementById('updateBtn'), {
             content: `Bulk Update your class now`,
             arrow: true
           });
          document.querySelector('.mbFilter').style.zIndex = '100';
           let selectBox = new Choices("#newFilter", {
             allowHTML: true,
             searchEnabled: true, 
             duplicateItemsAllowed: false, 
             placeholderValue: "Filter by Mindbody#", 
             searchPlaceholderValue: "Search Mindbody#"
           });
          
           // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
           let allSelected = [];
           document.querySelector('#newFilter').addEventListener(
             'change',
             function(event) {
               var selected = event.detail.value;
               allSelected.push(selected);
               console.log(event.detail.value);
             },
             false,
           );
           let allChoices = [];
           
           document.querySelector('#newFilter').addEventListener(
             'choice',
             function(event) {
               // each time a choice is selected
               var choice = event.detail.choice;
               allChoices.push(choice);
               console.log(event.detail.choice);
             },
             false,
           );
           document.querySelector('#newFilter').style.visibility = 'hidden';
         var submitButton = document.createElement('button');
         submitButton.id = 'submit1';
         submitButton.className = 'subButton5'
         submitButton.innerHTML = `Submit Filters`;  
         
         var clearButton = document.createElement('button');
         clearButton.id = 'clear1';
         clearButton.className = 'subButton5'
         clearButton.innerHTML = `Clear Filters`;  
         
         if(document.getElementById('submit1') !== null && document.getElementById('clear1') !== null ) {
         
         } else {
         document.getElementById('topElement2').appendChild(divFilter);
         document.querySelector('.choices').appendChild(submitButton);
         document.querySelector('.choices').appendChild(clearButton);
         }
         
         document.getElementById('clear1').onclick = function() {
           handleMan2_Table(records)
           removeHighlightedItems();
         }
         
         document.getElementById('submit1').onclick = function() {
           // var checked = document.querySelectorAll('#newFilter :checked');
           let mb = [];
           console.log('allSelected', allSelected);
           var select = document.getElementById('newFilter');
             var selected = [...select.options]
                             .filter(option => option.selected)
                             .map(option => option.value);
            function filterFromMindbody() {
              var tableData, tr, td, i;
              var filterParams = selected; //split by | to get array of search parameters
              var allTablesArr = [];
                if (window.getComputedStyle(document.querySelector('.man2sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man2tp_container'),null).getPropertyValue('display') === 'none') {
                  tableData = document.querySelector('.man2_container');
                } else if (window.getComputedStyle(document.querySelector('.man2_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man2tp_container'),null).getPropertyValue('display') === 'none') {
                  tableData = document.querySelector('.man2sk_container');
                } else if (window.getComputedStyle(document.querySelector('.man2_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man2sk_container'),null).getPropertyValue('display') === 'none') {
                  tableData = document.querySelector('.man2tp_container');
                }
               
              tr = tableData.getElementsByTagName('tr');
              // For each table row, hide those who don't match the search text
              for (i = 0; i< tr.length; i++) {
                  td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                  if (td) {
                      var tdValue = td.innerHTML;
                      var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                      if ( isMatched.length ) //check length of filtered resultset
                          tr[i].style.display = "";
                      else
                          tr[i].style.display = "none";
                  }        
                }
              }
                filterFromMindbody();
            }             
        }
      
      
export const handleMan3_Table = async (records) => {
        var skill1 = document.getElementById('skill1').innerText;
        var skill2 = document.getElementById('skill2').innerText;
        var skill3 = document.getElementById('skill3').innerText;

          var records = records;
            let tableRowsHTML = ``;
            let tableRowsHTML2 = ``;
            let multiHTML = ``;
            let allMb = [];
            let choicesArr = [];
 
            function skillFunc(currentValue, index){
              let val = currentValue.value;
              let label = currentValue.label;
               let optionHTML = `<option value="${val}">${val}</option>`
               multiHTML += optionHTML;
             }
            
            for (let i = 0; i < records.length; i++) {
              const record = records[i];
              const mbNum = record['MindBodyNum'].value;
              allMb.push(mbNum);
            }
             ////////////*** Manners 3: Unmastered Skills Table  ***/////////////////////////
            for (let i = 0; i < records.length; i++) {
              const record = records[i];
              const lastName = record.clientLastName.value;
              const dogName = record['dogName'].value + ' ' + lastName;
              const mbNum = record['MindBodyNum'].value;
              const recId = record.Record_number.value;
              const commNum = record.commCount.value;
              const lastComment = record.lastCom.value;
              let val =  {
                value: mbNum,
                label: mbNum + '-' + dogName,
                selected: true,
                disabled: false,
                customProperties: {
                  description: lastComment
                }
              };
              choicesArr.push(val);
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
              const skills = record['M3UMSK'].value

                var totalSkills_um = skills.length;
  
              let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';

                const rowHTML = getRowHTML7(mbNum,dogName, mbNumHtml, unmaster1, unmaster2, unmaster3);
                tableRowsHTML += rowHTML;
                
              } 
              var divTable = document.getElementById('table_tbody');
              // divTable.className = 'fl-table';
              divTable.innerHTML += `${tableRowsHTML}` ;
        
                document.getElementById('man3_table').appendChild(divTable);
                
                ////////////*** Manners 3: Skills Taught Table  ***/////////////////////////
              for (let i = 0; i < records.length; i++) {
                const record = records[i];
                const lastName = record.clientLastName.value;
                const dogName = record['dogName'].value + ' ' + lastName;
                const mbNum = record['MindBodyNum'].value;
                const recId = record.Record_number.value;
                const commNum = record.commCount.value;
                const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
          var skillTable;
        if (record['Table_28'].value.length === 0) {
          skillTable = record['Table_28'].value;
        } else if (record['Table_28'].value.length > 0){
          skillTable = record['Table_28'].value.reverse();
        }
             
              if (skillTable.length <= 1) {
                var num = '--';
              } else if (skillTable.length > 1) {
                var num1 = '+ ' + ((skillTable.length) - 1);
                var commentCountDiv = ``
                var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
              }
            
                
              if (skillTable.length >= 1){
               
                    var tSkills = skillTable[0].value.M3UMSK_0.value;
                    var dateTaught1 = skillTable[0].value.Date_29.value;
                    let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                  
                    
                    var comments = skillTable[0].value.Text_area_35.value
                    var unmaster1, unmaster2, unmaster3;
                    unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                    unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                    unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
 
                      const rowHTML = getRowHTML8(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, comments);
                      tableRowsHTML2 += rowHTML;
                  
                  if (skillTable.length >= 2) {
                    for (let j = 0; j < skillTable.length; j++) {
                     
                      //skillTable = skillTable.splice(1);
                    var num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
                    if (skillTable[j] == undefined) {
                    
                      // //skillTable = skillTable.splice(1);
                    } else {
                    var tSkills = skillTable[j].value.M3UMSK_0.value;
                    var dateTaught1 =  skillTable[j].value.Date_29.value;
                    let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                   
                    // dateTaught = m + '/' + d + '/' + y;
                    comments = skillTable[j].value.Text_area_35.value
                    var unmaster1, unmaster2, unmaster3;
                    unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                    unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                    unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
 
                      const rowHTML = getRowHTML8_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, comments);
                      tableRowsHTML2 += rowHTML;
                   }
                  }
                }
              }
            }
              var divTable2 = document.getElementById('table_tbody2');
                divTable2.innerHTML += `${tableRowsHTML2}`; 
              document.getElementById('man3sk_table').appendChild(divTable2);                       
        
              for (let i = 0; i < records.length; i++) {
                const record = records[i];
                const commNum = record.commCount.value;
                const mbNum = record['MindBodyNum'].value;
                if (commNum > 0){
                  const lastComment = record.lastCom.value;
                  var allIcons = document.querySelectorAll('.commNum');
                  var icons = [...allIcons];
                  for (var n = 0; n < icons.length; n++) {
                    var icon = icons[n];
                    var iconId = icon.id;
                    if (iconId === mbNum) {
                      tippy(icon, {
                        content: `${lastComment}`,
                        arrow:true
                      });
                    }
                  }
                }
              }
             ////////////*** Manners 3: Filter  ***/////////////////////////
             createModal();
             choicesArr.forEach(skillFunc);

             var divFilter = document.getElementById('newFilter');
               divFilter.className = 'filterClass';
               divFilter.innerHTML += `${multiHTML}`;
               tippy(document.getElementById('updateBtn'), {
                 content: `Bulk Update your class now`,
                 arrow: true
               });
              document.querySelector('.mbFilter').style.zIndex = '100';
               let selectBox = new Choices("#newFilter", {
                 allowHTML: true,
                 searchEnabled: true, 
                 duplicateItemsAllowed: false, 
                 placeholderValue: "Filter by Mindbody#", 
                 searchPlaceholderValue: "Search Mindbody#"
               });
              
               // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
               let allSelected = [];
               document.querySelector('#newFilter').addEventListener(
                 'change',
                 function(event) {
                   var selected = event.detail.value;
                   allSelected.push(selected);
                   console.log(event.detail.value);
                 },
                 false,
               );
               let allChoices = [];
               
               document.querySelector('#newFilter').addEventListener(
                 'choice',
                 function(event) {
                   // each time a choice is selected
                   var choice = event.detail.choice;
                   allChoices.push(choice);
                   console.log(event.detail.choice);
                 },
                 false,
               );
               document.querySelector('#newFilter').style.visibility = 'hidden';
             var submitButton = document.createElement('button');
             submitButton.id = 'submit1';
             submitButton.className = 'subButton5'
             submitButton.innerHTML = `Submit Filters`;  
             
             var clearButton = document.createElement('button');
             clearButton.id = 'clear1';
             clearButton.className = 'subButton5'
             clearButton.innerHTML = `Clear Filters`;  
             
             if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
             
             } else {
             document.getElementById('topElement2').appendChild(divFilter);
             document.querySelector('.choices').appendChild(submitButton);
             document.querySelector('.choices').appendChild(clearButton);
             }
             
             document.getElementById('clear1').onclick = function() {
               handleMan3_Table(records);
               removeHighlightedItems();
             }
             
             document.getElementById('submit1').onclick = function() {
               // var checked = document.querySelectorAll('#newFilter :checked');
               let mb = [];
               console.log('allSelected', allSelected);
               var select = document.getElementById('newFilter');
                 var selected = [...select.options]
                                 .filter(option => option.selected)
                                 .map(option => option.value);
                function filterFromMindbody() {
                  var tableData, tr, td, i;
                  var filterParams = selected; //split by | to get array of search parameters
                  var allTablesArr = [];
                    if (window.getComputedStyle(document.querySelector('.man3sk_container'),null).getPropertyValue('display') === 'none') {
                      tableData = document.querySelector('.man3_container');
                    } else if (window.getComputedStyle(document.querySelector('.man3_container'),null).getPropertyValue('display') === 'none') {
                      tableData = document.querySelector('.man3sk_container');
                    }
                   
                  tr = tableData.getElementsByTagName('tr');
                  // For each table row, hide those who don't match the search text
                  for (i = 0; i< tr.length; i++) {
                      td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                      if (td) {
                          var tdValue = td.innerHTML;
                          var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                          if ( isMatched.length ) //check length of filtered resultset
                              tr[i].style.display = "";
                          else
                              tr[i].style.display = "none";
                      }        
                    }
                  }
                    filterFromMindbody();
                }             
            }

export const handleMan4_Table = async (records) => {
              var records = records;
                var skill1 = document.getElementById('skill1').innerText;
                var skill2 = document.getElementById('skill2').innerText;
                var skill3 = document.getElementById('skill3').innerText;
                var skill4 = document.getElementById('skill4').innerText;
                var skill5 = document.getElementById('skill5').innerText;
                var skill6 = document.getElementById('skill6').innerText;
                var skill7 = document.getElementById('skill7').innerText;
                var skill8 = document.getElementById('skill8').innerText;
               
           
            
                var tpskill1 = document.getElementById('tpskill1').innerText;
                var tpskill2 = document.getElementById('tpskill2').innerText;
                var tpskill3 = document.getElementById('tpskill3').innerText;
                var tpskill4 = document.getElementById('tpskill4').innerText;
                var tpskill5 = document.getElementById('tpskill5').innerText;
                var tpskill6 = document.getElementById('tpskill6').innerText;
                var tpskill7 = document.getElementById('tpskill7').innerText;
                var tpskill8 = document.getElementById('tpskill8').innerText;
                var tpskill9 = document.getElementById('tpskill9').innerText;
                var tpskill10 = document.getElementById('tpskill10').innerText;
                var tpskill11 = document.getElementById('tpskill11').innerText;
                var tpskill12 = document.getElementById('tpskill12').innerText;
                var tpskill13 = document.getElementById('tpskill13').innerText;
                var tpskill14 = document.getElementById('tpskill14').innerText;
                var tpskill15 = document.getElementById('tpskill15').innerText;
                var tpskill16 = document.getElementById('tpskill16').innerText;
            
                let tableRowsHTML = ``;
                let tableRowsHTML2 = ``;
                let tableRowsHTML3 = ``;
                let multiHTML = ``;
                let allMb = [];
                let choicesArr = [];
 
                function skillFunc(currentValue, index){
                  let val = currentValue.value;
                  let label = currentValue.label;
                   let optionHTML = `<option value="${val}">${val}</option>`
                   multiHTML += optionHTML;
                 }
                
                for (let i = 0; i < records.length; i++) {
                  const record = records[i];
                  const mbNum = record['MindBodyNum'].value;
                  allMb.push(mbNum);
                }
                 ////////////*** Manners 3: Unmastered Skills Table  ***/////////////////////////
                for (let i = 0; i < records.length; i++) {
                  const record = records[i];
                  const lastName = record.clientLastName.value;
                  const dogName = record['dogName'].value + ' ' + lastName;
                  const mbNum = record['MindBodyNum'].value;
                  const recId = record.Record_number.value;
                  const commNum = record.commCount.value;
                  const lastComment = record.lastCom.value;
                  let val =  {
                    value: mbNum,
                    label: mbNum + '-' + dogName,
                    selected: true,
                    disabled: false,
                    customProperties: {
                      description: lastComment
                    }
                  };
                  choicesArr.push(val);
                    if (commNum >= 1){
                      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>
                                          <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                          <div id="${mbNum}" class='commNum'>${commNum}</div></a>`

                    } else {
                      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                    }
                  const skills = record['M4MSK'].value
                      let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                      let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               
           
            
                    const rowHTML = getRowHTML9(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8);
                    tableRowsHTML += rowHTML;
                  } 
                  var divTable = document.getElementById('table_tbody');
                  // divTable.className = 'fl-table';
                  divTable.innerHTML += `${tableRowsHTML}`; 
            
                    document.getElementById('man4_table').appendChild(divTable);
                    
                    ////////////*** Manners 4: Skills Taught Table  ***/////////////////////////
                  for (let i = 0; i < records.length; i++) {
                    const record = records[i];
                    const lastName = record.clientLastName.value;
                    const dogName = record['dogName'].value + ' ' + lastName;
                    const mbNum = record['MindBodyNum'].value;
                    const recId = record.Record_number.value;
                    const commNum = record.commCount.value;
                    const lastComment = record.lastCom.value;
                      if (commNum >= 1){
                        var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                        <div class='icon'><i class="fas fa-comment-alt"></i></div>
                        <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

                      } else {
                        var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                      }
                    const skillTable = record['Table_12'].value.reverse();
                    if (skillTable.length === 1) {
                      var num = '--';
                    } else if (skillTable.length > 1) {
                      var num1 = '+ ' + skillTable.length;
                      var commentCountDiv = ``
                      var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
                    }
                      // for (let j = 0; j < skillTable.length; j++) {
                        var tSkills = skillTable[0].value.M4MSK_1.value;
                        var dateTaught1 = skillTable[0].value.Date_13.value;
                        let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                        
                        
                        var comments = skillTable[0].value.Text_area_12.value
                        var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8;
                        unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                        unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                        unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                        unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                        unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                        unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                        unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                        unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';

                          const rowHTML = getRowHTML10(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments);
                          tableRowsHTML2 += rowHTML;
                          if (skillTable.length >= 2) {
                            //skillTable = skillTable.splice(1);
                            num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;

                          for (let j = 0; j < skillTable.length; j++) {
                            var tSkills = skillTable[j].value.M4MSK_1.value;
                            var dateTaught1 = skillTable[j].value.Date_13.value;
                            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                           
                            
                            var comments = skillTable[j].value.Text_area_12.value
                            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8;
                            unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                            unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                            unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                            unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                            unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                            unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                            unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                            unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
    
                              const rowHTML = getRowHTML10_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, comments);
                              tableRowsHTML2 += rowHTML;
                          }
                      }
                  }
                  var divTable2 = document.getElementById('table_tbody2');
                    divTable2.innerHTML += `${tableRowsHTML2}`; 
                  document.getElementById('man4sk_table').appendChild(divTable2);                       
            
            ////////////*** Manners 4: Talking Points Table  ***/////////////////////////
            
                  for (let i = 0; i < records.length; i++) {
                    const record = records[i];
                    const lastName = record.clientLastName.value;
                    const dogName = record['dogName'].value + ' ' + lastName;
                    const mbNum = record['MindBodyNum'].value;
                    const recId = record.Record_number.value;
                    const commNum = record.commCount.value;
                    const lastComment = record.lastCom.value;
                      if (commNum >= 1){
                        var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                        <div class='icon'><i class="fas fa-comment-alt"></i></div>
                        <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

                      } else {
                        var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                      }
                    let tp_skills = record['M4TPEG'].value
                    var totalSkills_um = tp_skills.length;
              
                        let unmaster1 = tp_skills.find((item) => item === tpskill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster2 = tp_skills.find((item) => item === tpskill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster3 = tp_skills.find((item) => item === tpskill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster4 = tp_skills.find((item) => item === tpskill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster5 = tp_skills.find((item) => item === tpskill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster6 = tp_skills.find((item) => item === tpskill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster7 = tp_skills.find((item) => item === tpskill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster8 = tp_skills.find((item) => item === tpskill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster9 = tp_skills.find((item) => item === tpskill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster10 = tp_skills.find((item) => item === tpskill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster11 = tp_skills.find((item) => item === tpskill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster12 = tp_skills.find((item) => item === tpskill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster13 = tp_skills.find((item) => item === tpskill13) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster14 = tp_skills.find((item) => item === tpskill14) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster15 = tp_skills.find((item) => item === tpskill15) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                        let unmaster16 = tp_skills.find((item) => item === tpskill16) !== undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              
                      const rowHTML = getRowHTML23(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, unmaster15, unmaster16);
                      tableRowsHTML3 += rowHTML;
                      
                    } 
            
                    var divTable3 = document.getElementById('table_tbody3');
                    // divTable.className = 'fl-table';
                    divTable3.innerHTML += `${tableRowsHTML3}`; 
              
                    document.getElementById('man4tp_table').appendChild(divTable3);  
            
                    for (let i = 0; i < records.length; i++) {
                      const record = records[i];
                      const commNum = record.commCount.value;
                      const mbNum = record['MindBodyNum'].value;
                      if (commNum > 0){
                        const lastComment = record.lastCom.value;
                        var allIcons = document.querySelectorAll('.commNum');
                        var icons = [...allIcons];
                        for (var n = 0; n < icons.length; n++) {
                          var icon = icons[n];
                          var iconId = icon.id;
                          if (iconId === mbNum) {
                            tippy(icon, {
                              content: `${lastComment}`,
                              arrow:true
                            });
                          }
                        }
                      }
                    }
                 ////////////*** Manners 4: Filter  ***/////////////////////////
                 createModal();
                 choicesArr.forEach(skillFunc);

                 var divFilter = document.getElementById('newFilter');
                   divFilter.className = 'filterClass';
                   divFilter.innerHTML += `${multiHTML}`;
                   tippy(document.getElementById('updateBtn'), {
                     content: `Bulk Update your class now`,
                     arrow: true
                   });
                  document.querySelector('.mbFilter').style.zIndex = '100';
                   let selectBox = new Choices("#newFilter", {
                     allowHTML: true,
                     searchEnabled: true, 
                     duplicateItemsAllowed: false, 
                     placeholderValue: "Filter by Mindbody#", 
                     searchPlaceholderValue: "Search Mindbody#"
                   });
                  
                   // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
                   let allSelected = [];
                   document.querySelector('#newFilter').addEventListener(
                     'change',
                     function(event) {
                       var selected = event.detail.value;
                       allSelected.push(selected);
                       console.log(event.detail.value);
                     },
                     false,
                   );
                   let allChoices = [];
                   
                   document.querySelector('#newFilter').addEventListener(
                     'choice',
                     function(event) {
                       // each time a choice is selected
                       var choice = event.detail.choice;
                       allChoices.push(choice);
                       console.log(event.detail.choice);
                     },
                     false,
                   );
                   document.querySelector('#newFilter').style.visibility = 'hidden';
                 var submitButton = document.createElement('button');
                 submitButton.id = 'submit1';
                 submitButton.className = 'subButton5'
                 submitButton.innerHTML = `Submit Filters`;  
                 
                 var clearButton = document.createElement('button');
                 clearButton.id = 'clear1';
                 clearButton.className = 'subButton5'
                 clearButton.innerHTML = `Clear Filters`;  
                 
                 if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
                 
                 } else {
                 document.getElementById('topElement2').appendChild(divFilter);
                 document.querySelector('.choices').appendChild(submitButton);
                 document.querySelector('.choices').appendChild(clearButton);
                 }
                 
                 document.getElementById('clear1').onclick = function() {
                   handleMan4_Table(records)
                   removeHighlightedItems();
                 }
                 
                 document.getElementById('submit1').onclick = function() {
                   // var checked = document.querySelectorAll('#newFilter :checked');
                   let mb = [];
                   console.log('allSelected', allSelected);
                   var select = document.getElementById('newFilter');
                     var selected = [...select.options]
                                     .filter(option => option.selected)
                                     .map(option => option.value);

                    function filterFromMindbody() {
                      var tableData, tr, td, i;
                      var filterParams = selected; //split by | to get array of search parameters
                      var allTablesArr = [];
                        if (window.getComputedStyle(document.querySelector('.man4sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man4tp_container'),null).getPropertyValue('display') === 'none') {
                          tableData = document.querySelector('.man4_container');
                        } else if (window.getComputedStyle(document.querySelector('.man4_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man4tp_container'),null).getPropertyValue('display') === 'none') {
                          tableData = document.querySelector('.man4sk_container');
                        } else if (window.getComputedStyle(document.querySelector('.man4_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.man4sk_container'),null).getPropertyValue('display') === 'none') {
                          tableData = document.querySelector('.man4tp_container');
                        }
                      
                      tr = tableData.getElementsByTagName('tr');
                      // For each table row, hide those who don't match the search text
                      for (i = 0; i< tr.length; i++) {
                          td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                          if (td) {
                              var tdValue = td.innerHTML;
                              var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                              if ( isMatched.length ) //check length of filtered resultset
                                  tr[i].style.display = "";
                              else
                                  tr[i].style.display = "none";
                          }        
                        }
                      }
                        filterFromMindbody();
                    }             
                }
          



export const handlePupPETable = async (records) => {
  var records = records;
    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    var skill6 = document.getElementById('skill6').innerText;
    var skill7 = document.getElementById('skill7').innerText;
    var skill8 = document.getElementById('skill8').innerText;
    var skill9 = document.getElementById('skill9').innerText;
    var skill10 = document.getElementById('skill10').innerText;
    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;
    let multiHTML = ``;
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** PUPPE: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['PPEMSK'].value
      var totalSkills_um = skills.length;
    
          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
        const rowHTML = getRowHTML11(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10);
        tableRowsHTML += rowHTML;

    }
    var divTable = document.getElementById('table_tbody');
    divTable.innerHTML += `${tableRowsHTML}`;
    document.getElementById('pupPE_table').appendChild(divTable);
                             
     // //////////////////////Taught Skills////////////////////////////////
     for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skillTable = record['Table_14'].value.reverse();
      if (skillTable.length === 1) {
        var num = '--';
      } else if (skillTable.length > 1) {
        var num1 = '+ ' + skillTable.length;
        var commentCountDiv = ``
        var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
      }
          var tSkills = skillTable[0].value.PPEMSK_1.value;
          var dateTaught1 = skillTable[0].value.Date_15.value;
          let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
          
          
          var comments = skillTable[0].value.Text_area_14.value
          var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10;
          unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
          unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
          unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
          unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
          unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
          unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
          unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
          unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
          unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
          unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';

            const rowHTML = getRowHTML12(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments);
            tableRowsHTML2 += rowHTML;

            if (skillTable.length >= 2) {
              //skillTable = skillTable.splice(1);
              num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;     
      for (let j = 0; j < skillTable.length; j++) {
          var tSkills = skillTable[j].value.PPEMSK_1.value;
          var dateTaught1 = skillTable[j].value.Date_15.value;
          let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
         
          
          var comments = skillTable[j].value.Text_area_14.value
          var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10;
          unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
          unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
          unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
          unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
          unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
          unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
          unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
          unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
          unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
          unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';

            const rowHTML = getRowHTML12_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments);
            tableRowsHTML2 += rowHTML;
        }
    }
  }
  var divTable = document.getElementById('table_tbody2');
    divTable.innerHTML += `${tableRowsHTML2}`;
    document.getElementById('pupPEsk_table').appendChild(divTable);

    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const commNum = record.commCount.value;
      const mbNum = record['MindBodyNum'].value;
      if (commNum > 0){
        const lastComment = record.lastCom.value;
        var allIcons = document.querySelectorAll('.commNum');
        var icons = [...allIcons];
        for (var n = 0; n < icons.length; n++) {
          var icon = icons[n];
          var iconId = icon.id;
          if (iconId === mbNum) {
            tippy(icon, {
              content: `${lastComment}`,
              arrow:true
            });
          }
        }
      }
    }
                             
     // //////////////////////Taught Skills////////////////////////////////
     createModal();
     choicesArr.forEach(skillFunc);

                 var divFilter = document.getElementById('newFilter');
                   divFilter.className = 'filterClass';
                   divFilter.innerHTML += `${multiHTML}`;
                   tippy(document.getElementById('updateBtn'), {
                     content: `Bulk Update your class now`,
                     arrow: true
                   });
                  document.querySelector('.mbFilter').style.zIndex = '100';
                   let selectBox = new Choices("#newFilter", {
                     allowHTML: true,
                     searchEnabled: true, 
                     duplicateItemsAllowed: false, 
                     placeholderValue: "Filter by Mindbody#", 
                     searchPlaceholderValue: "Search Mindbody#"
                   });
                  
                   // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
                   let allSelected = [];
                   document.querySelector('#newFilter').addEventListener(
                     'change',
                     function(event) {
                       var selected = event.detail.value;
                       allSelected.push(selected);
                       console.log(event.detail.value);
                     },
                     false,
                   );
                   let allChoices = [];
                   
                   document.querySelector('#newFilter').addEventListener(
                     'choice',
                     function(event) {
                       // each time a choice is selected
                       var choice = event.detail.choice;
                       allChoices.push(choice);
                       console.log(event.detail.choice);
                     },
                     false,
                   );
                   document.querySelector('#newFilter').style.visibility = 'hidden';
                 var submitButton = document.createElement('button');
                 submitButton.id = 'submit1';
                 submitButton.className = 'subButton5'
                 submitButton.innerHTML = `Submit Filters`;  
                 
                 var clearButton = document.createElement('button');
                 clearButton.id = 'clear1';
                 clearButton.className = 'subButton5'
                 clearButton.innerHTML = `Clear Filters`;  
                 
                 if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
                 
                 } else {
                 document.getElementById('topElement2').appendChild(divFilter);
                 document.querySelector('.choices').appendChild(submitButton);
                 document.querySelector('.choices').appendChild(clearButton);
                 }
                 
                 document.getElementById('clear1').onclick = function() {
                  handlePupPETable(records)
                   removeHighlightedItems();
                 }
                 
                 document.getElementById('submit1').onclick = function() {
                   // var checked = document.querySelectorAll('#newFilter :checked');
                   let mb = [];
                   console.log('allSelected', allSelected);
                   var select = document.getElementById('newFilter');
                     var selected = [...select.options]
                                     .filter(option => option.selected)
                                     .map(option => option.value);

          function filterFromMindbody() {
            var tableData, tr, td, i;
            if (window.getComputedStyle(document.querySelector('.pupPEsk_container'),null).getPropertyValue('display') === 'none') {
              tableData = document.querySelector('.pupPE_container');
            } else if (window.getComputedStyle(document.querySelector('.pupPE_container'),null).getPropertyValue('display') === 'none' ) {
              tableData = document.querySelector('.pupPEsk_container');
            } 
          
            var filterParams = selected; //split by | to get array of search parameters

            tr = tableData.getElementsByTagName('tr');
            // For each table row, hide those who don't match the search text
            for (i = 0; i< tr.length; i++) {
                td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                if (td) {
                    var tdValue = td.innerHTML;
                    var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                    if ( isMatched.length ) //check length of filtered resultset
                        tr[i].style.display = "";
                    else
                        tr[i].style.display = "none";
                }        
              }
            }
              filterFromMindbody();
          }
        }



export const handleAgilityTable = async (records) => {
  var records = records;
    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    var skill6 = document.getElementById('skill6').innerText;
    var skill7 = document.getElementById('skill7').innerText;
    var skill8 = document.getElementById('skill8').innerText;
    var skill9 = document.getElementById('skill9').innerText;
    var skill10 = document.getElementById('skill10').innerText;
    let tableRowsHTML = ``;
    
    let multiHTML = ``;
    let allMb = [];
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** Agility1: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['AMSK'].value
      var totalSkills_um = skills.length;
      console.log('totalSkills_um:', totalSkills_um);
          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
        const rowHTML = getRowHTML13(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10);
        tableRowsHTML += rowHTML;

    }
    var divTable = document.getElementById('table_tbody');
      divTable.innerHTML += `${tableRowsHTML}`;
          document.getElementById('agility1_table').appendChild(divTable);

   // //////////////////////Taught Skills////////////////////////////////
   let tableRowsHTML2 = ``;
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      
      let skillTable = record['Table_16'].value.reverse();
      if (skillTable.length === 1) {
        var num = '--';
      } else if (skillTable.length > 1) {
        // let skillTable = record['Table_16'].value.length -1;
        var num1 = '+ ' + skillTable.length;
        var commentCountDiv = ``
        var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
      }
          var tSkills = skillTable[0].value.AMSK_1.value;
          var dateTaught1 = skillTable[0].value.Date_17.value;
          let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
         
          
          var comments = skillTable[0].value.Text_area_16.value
          var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10;
          unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
          unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
          unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
          unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
          unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
          unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
          unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
          unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
          unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
          unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';

            const rowHTML = getRowHTML14(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments);
            tableRowsHTML2 += rowHTML;


            if (skillTable.length >= 2) {
              //skillTable = skillTable.splice(1);
              num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;     
            for (let j = 0; j < skillTable.length; j++) {
              var tSkills = skillTable[j].value.AMSK_1.value;
              var dateTaught1 = skillTable[j].value.Date_17.value;
              let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
           
              
              var comments = skillTable[j].value.Text_area_16.value
              var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10;
              unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
              unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
              unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
              unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
              unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
              unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
              unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
              unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
              unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
              unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';
    
                const rowHTML = getRowHTML14_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, comments);
                tableRowsHTML2 += rowHTML;
            }
        }
    }

    var divTable2 = document.getElementById('table_tbody2');
    divTable2.innerHTML += `${tableRowsHTML2}`;
    document.getElementById('agility1sk_table').appendChild(divTable2);

    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const commNum = record.commCount.value;
      const mbNum = record['MindBodyNum'].value;
      if (commNum > 0){
        const lastComment = record.lastCom.value;
        var allIcons = document.querySelectorAll('.commNum');
        var icons = [...allIcons];
        for (var n = 0; n < icons.length; n++) {
          var icon = icons[n];
          var iconId = icon.id;
          if (iconId === mbNum) {
            tippy(icon, {
              content: `${lastComment}`,
              arrow:true
            });
          }
        }
      }
    }
    createModal();                
     // //////////////////////Taught Skills End////////////////////////////////


     choicesArr.forEach(skillFunc);

     var divFilter = document.getElementById('newFilter');
       divFilter.className = 'filterClass';
       divFilter.innerHTML += `${multiHTML}`;
       tippy(document.getElementById('updateBtn'), {
         content: `Bulk Update your class now`,
         arrow: true
       });
      document.querySelector('.mbFilter').style.zIndex = '100';
       let selectBox = new Choices("#newFilter", {
         allowHTML: true,
         searchEnabled: true, 
         duplicateItemsAllowed: false, 
         placeholderValue: "Filter by Mindbody#", 
         searchPlaceholderValue: "Search Mindbody#"
       });
      
       // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
       let allSelected = [];
       document.querySelector('#newFilter').addEventListener(
         'change',
         function(event) {
           var selected = event.detail.value;
           allSelected.push(selected);
           console.log(event.detail.value);
         },
         false,
       );
       let allChoices = [];
       
       document.querySelector('#newFilter').addEventListener(
         'choice',
         function(event) {
           // each time a choice is selected
           var choice = event.detail.choice;
           allChoices.push(choice);
           console.log(event.detail.choice);
         },
         false,
       );
       document.querySelector('#newFilter').style.visibility = 'hidden';
     var submitButton = document.createElement('button');
     submitButton.id = 'submit1';
     submitButton.className = 'subButton5'
     submitButton.innerHTML = `Submit Filters`;  
     
     var clearButton = document.createElement('button');
     clearButton.id = 'clear1';
     clearButton.className = 'subButton5'
     clearButton.innerHTML = `Clear Filters`;  
     
     if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
     
     } else {
     document.getElementById('topElement2').appendChild(divFilter);
     document.querySelector('.choices').appendChild(submitButton);
     document.querySelector('.choices').appendChild(clearButton);
     }
     
     document.getElementById('clear1').onclick = function() {
      handleAgilityTable(records)
       removeHighlightedItems();
     }
     
     document.getElementById('submit1').onclick = function() {
       // var checked = document.querySelectorAll('#newFilter :checked');
       let mb = [];
       console.log('allSelected', allSelected);
       var select = document.getElementById('newFilter');
         var selected = [...select.options]
                         .filter(option => option.selected)
                         .map(option => option.value);


          function filterFromMindbody() {
            var tableData, tr, td, i;
            if (window.getComputedStyle(document.querySelector('.agility1sk_container'),null).getPropertyValue('display') === 'none') {
              tableData = document.getElementById('agility1_table');
            } else if (window.getComputedStyle(document.querySelector('.agility1_container'),null).getPropertyValue('display') === 'none' ) {
              tableData = document.getElementById('agility1sk_table');
            } 
            var filterParams = selected; //split by | to get array of search parameters
            tr = tableData.getElementsByTagName('tr');
            // For each table row, hide those who don't match the search text
            for (i = 0; i< tr.length; i++) {
                td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                if (td) {
                    var tdValue = td.innerHTML;
                    var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                    if ( isMatched.length ) //check length of filtered resultset
                        tr[i].style.display = "";
                    else
                        tr[i].style.display = "none";
                }        
              }
            }
              filterFromMindbody();
          }
              
}




export const handleAgility2Table = async (records) => {
  var records = records;
    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    var skill6 = document.getElementById('skill6').innerText;
    var skill7 = document.getElementById('skill7').innerText;
    var skill8 = document.getElementById('skill8').innerText;
    var skill9 = document.getElementById('skill9').innerText;
    
    var cskill1 = document.getElementById('cskill1').innerText;
    var cskill2 = document.getElementById('cskill2').innerText;
    var cskill3 = document.getElementById('cskill3').innerText;
    var cskill4 = document.getElementById('cskill4').innerText;
    var cskill5 = document.getElementById('cskill5').innerText;
    var cskill6 = document.getElementById('cskill6').innerText;
    var cskill7 = document.getElementById('cskill7').innerText;
    var cskill8 = document.getElementById('cskill8').innerText;
    var cskill9 = document.getElementById('cskill9').innerText;
    var cskill10 = document.getElementById('cskill10').innerText;
    var cskill11 = document.getElementById('cskill11').innerText;
    var cskill12 = document.getElementById('cskill12').innerText;
    var cskill13 = document.getElementById('cskill13').innerText;
    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;
    let tableRowsHTML3 = ``;
    let tableRowsHTML4 = ``;
    let multiHTML = ``;
    let allMb = [];
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** Manners 3: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['A2MSK'].value
      let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
        const rowHTML = getRowHTML15(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9);
        tableRowsHTML += rowHTML;
    }
    var divTable = document.getElementById('table_tbody');
      divTable.innerHTML += `${tableRowsHTML}` ;
    document.getElementById('agility2_table').appendChild(divTable);

             ////////////*** Agility 2: Skills Taught Table  ***/////////////////////////

             ////////////*** Agility 2: Courses NOT TAUGHT Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['A2_NT'].value;
          let unmaster1 = skills.find((item) => item === cskill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === cskill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === cskill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === cskill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === cskill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === cskill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === cskill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster8 = skills.find((item) => item === cskill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster9 = skills.find((item) => item === cskill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster10 = skills.find((item) => item === cskill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster11 = skills.find((item) => item === cskill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster12 = skills.find((item) => item === cskill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster13 = skills.find((item) => item === cskill13) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
        const rowHTML = getRowHTML_ag2(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13);
        tableRowsHTML4 += rowHTML;
    }
 
    var divTable4 = document.getElementById('table_tbody4');
    divTable4.innerHTML += `${tableRowsHTML4}` ;
    document.getElementById('agility2nt_table').appendChild(divTable4);

             ////////////*** Agility 2: Skills Taught Table  ***/////////////////////////
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
        const mbNum = record['MindBodyNum'].value;
        const recId = record.Record_number.value;
        const commNum = record.commCount.value;
        const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
          allMb.push(mbNum);
              const skillTable = record['Table_18'].value.reverse();
              if (skillTable.length === 1) {
                var num = '--';
              } else if (skillTable.length > 1) {
                var num1 = '+ ' + skillTable.length;
                var commentCountDiv = ``
                var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
              }
                  var tSkills = skillTable[0].value.A2MSK_1.value;
                  var cSkills = skillTable[0].value.A2Course.value;
                  var dateTaught1 = skillTable[0].value.Date_19.value;
                  let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                 
                  
                  var comments = skillTable[0].value.Text_area_18.value
                  var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9;
                  var cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13;
                    unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                    unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                    unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                    unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                    unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                    unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                    unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                    unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
                    unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
        
                    const rowHTML = getRowHTML16(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                    tableRowsHTML2 += rowHTML;

                    cmaster1 = cSkills == cskill1 ? dateTaught : '--';
                    cmaster2 = cSkills == cskill2 ? dateTaught : '--';
                    cmaster3 = cSkills == cskill3 ? dateTaught : '--';
                    cmaster4 = cSkills == cskill4 ? dateTaught : '--';
                    cmaster5 = cSkills == cskill5 ? dateTaught : '--';
                    cmaster6 = cSkills == cskill6 ? dateTaught : '--';
                    cmaster7 = cSkills == cskill7 ? dateTaught : '--';
                    cmaster8 = cSkills == cskill8 ? dateTaught : '--';
                    cmaster9 = cSkills == cskill9 ? dateTaught : '--';
                    cmaster10 = cSkills == cskill10 ? dateTaught : '--';
                    cmaster11 = cSkills == cskill11 ? dateTaught : '--';
                    cmaster12 = cSkills == cskill12 ? dateTaught : '--';
                    cmaster13 = cSkills == cskill13 ? dateTaught : '--';
        
                    const rowHTML2 = getRowHTML17(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, comments);
                    tableRowsHTML3 += rowHTML2;



                    if (skillTable.length >= 2) {
                      //skillTable = skillTable.splice(1);
                      num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;

                    for (let j = 0; j < skillTable.length; j++) {
                      var tSkills = skillTable[j].value.A2MSK_1.value;
                      var cSkills = skillTable[j].value.A2Course.value;
                      var datesTaught1 = skillTable[j].value.Date_19.value;
                      let datesTaught = format(new Date(datesTaught1), 'MM/dd/yyyy');
                     
                      var comments = skillTable[j].value.Text_area_18.value
                      var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9;
                      var cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13;
                        unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? datesTaught : '--';
                        unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? datesTaught : '--';
                        unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? datesTaught : '--';
                        unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? datesTaught : '--';
                        unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? datesTaught : '--';
                        unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? datesTaught : '--';
                        unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? datesTaught : '--';
                        unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? datesTaught : '--';
                        unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? datesTaught : '--';
          
                        // unmaster10 = tSkills[9] == skill10 ? dateTaught : '--';
            
                        const rowHTML = getRowHTML16_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                        tableRowsHTML2 += rowHTML;

                        cmaster1 = cSkills == cskill1 ? datesTaught : '--';
                        cmaster2 = cSkills == cskill2 ? datesTaught : '--';
                        cmaster3 = cSkills == cskill3 ? datesTaught : '--';
                        cmaster4 = cSkills == cskill4 ? datesTaught : '--';
                        cmaster5 = cSkills == cskill5 ? datesTaught : '--';
                        cmaster6 = cSkills == cskill6 ? datesTaught : '--';
                        cmaster7 = cSkills == cskill7 ? datesTaught : '--';
                        cmaster8 = cSkills == cskill8 ? datesTaught : '--';
                        cmaster9 = cSkills == cskill9 ? datesTaught : '--';
                        cmaster10 = cSkills == cskill10 ? datesTaught : '--';
                        cmaster11 = cSkills == cskill11 ? datesTaught : '--';
                        cmaster12 = cSkills == cskill12 ? datesTaught : '--';
                        cmaster13 = cSkills == cskill13 ? datesTaught : '--';
            
                        const rowHTML2 = getRowHTML17_hidden(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, comments);
                        tableRowsHTML3 += rowHTML2;
                    }
                }
            }
            var divTable2 = document.getElementById('table_tbody2');
            divTable2.innerHTML += `${tableRowsHTML2}` ;
          document.getElementById('agility2sk_table').appendChild(divTable2);

          var divTable3 = document.getElementById('table_tbody3');
          divTable3.innerHTML += `${tableRowsHTML3}` ;
        document.getElementById('agility2ct_table').appendChild(divTable3);

        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const commNum = record.commCount.value;
          const mbNum = record['MindBodyNum'].value;
          if (commNum > 0){
            const lastComment = record.lastCom.value;
            var allIcons = document.querySelectorAll('.commNum');
            var icons = [...allIcons];
            for (var n = 0; n < icons.length; n++) {
              var icon = icons[n];
              var iconId = icon.id;
              if (iconId === mbNum) {
                tippy(icon, {
                  content: `${lastComment}`,
                  arrow:true
                });
              }
            }
          }
        }
          ////////////*** Agility 2: Table END  ***/////////////////////////
          createModal();
          choicesArr.forEach(skillFunc);

          var divFilter = document.getElementById('newFilter');
            divFilter.className = 'filterClass';
            divFilter.innerHTML += `${multiHTML}`;
            tippy(document.getElementById('updateBtn'), {
              content: `Bulk Update your class now`,
              arrow: true
            });
           document.querySelector('.mbFilter').style.zIndex = '100';
            let selectBox = new Choices("#newFilter", {
              allowHTML: true,
              searchEnabled: true, 
              duplicateItemsAllowed: false, 
              placeholderValue: "Filter by Mindbody#", 
              searchPlaceholderValue: "Search Mindbody#"
            });
           
            // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
            let allSelected = [];
            document.querySelector('#newFilter').addEventListener(
              'change',
              function(event) {
                var selected = event.detail.value;
                allSelected.push(selected);
                console.log(event.detail.value);
              },
              false,
            );
            let allChoices = [];
            
            document.querySelector('#newFilter').addEventListener(
              'choice',
              function(event) {
                // each time a choice is selected
                var choice = event.detail.choice;
                allChoices.push(choice);
                console.log(event.detail.choice);
              },
              false,
            );
            document.querySelector('#newFilter').style.visibility = 'hidden';
          var submitButton = document.createElement('button');
          submitButton.id = 'submit1';
          submitButton.className = 'subButton5'
          submitButton.innerHTML = `Submit Filters`;  
          
          var clearButton = document.createElement('button');
          clearButton.id = 'clear1';
          clearButton.className = 'subButton5'
          clearButton.innerHTML = `Clear Filters`;  
          
          if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
          
          } else {
          document.getElementById('topElement2').appendChild(divFilter);
          document.querySelector('.choices').appendChild(submitButton);
          document.querySelector('.choices').appendChild(clearButton);
          }
          
          document.getElementById('clear1').onclick = function() {
            handleAgility2Table(records)
            removeHighlightedItems();
          }
          
          document.getElementById('submit1').onclick = function() {
            // var checked = document.querySelectorAll('#newFilter :checked');
            let mb = [];
            console.log('allSelected', allSelected);
            var select = document.getElementById('newFilter');
              var selected = [...select.options]
                              .filter(option => option.selected)
                              .map(option => option.value);
function filterFromMindbody() {
      var tableData, tr, td, i;
      var filterParams = selected; //split by | to get array of search parameters
        if (window.getComputedStyle(document.querySelector('.agility2sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility2ct_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility2nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility2_container');
        } else if (window.getComputedStyle(document.querySelector('.agility2_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility2ct_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility2nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility2sk_container');
        } else if (window.getComputedStyle(document.querySelector('.agility2_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility2sk_container'),null).getPropertyValue('display') === 'none'  && window.getComputedStyle(document.querySelector('.agility2nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility2ct_container');
        } else if (window.getComputedStyle(document.querySelector('.agility2_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility2sk_container'),null).getPropertyValue('display') === 'none'  && window.getComputedStyle(document.querySelector('.agility2ct_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility2nt_container');
        }

  tr = tableData.getElementsByTagName('tr');
  // For each table row, hide those who don't match the search text
  for (i = 0; i< tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
      if (td) {
          var tdValue = td.innerHTML;
          var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
          if ( isMatched.length ) //check length of filtered resultset
              tr[i].style.display = "";
          else
              tr[i].style.display = "none";
      }        
    }
  }
    filterFromMindbody();
 }          
}





export const handleAgility3_Table = async (records) => {
  var records = records;
    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    var skill6 = document.getElementById('skill6').innerText;
    var skill7 = document.getElementById('skill7').innerText;
    
    
    var cskill1 = document.getElementById('cskill1').innerText;
    var cskill2 = document.getElementById('cskill2').innerText;
    var cskill3 = document.getElementById('cskill3').innerText;
    var cskill4 = document.getElementById('cskill4').innerText;
    var cskill5 = document.getElementById('cskill5').innerText;
    var cskill6 = document.getElementById('cskill6').innerText;
    var cskill7 = document.getElementById('cskill7').innerText;
    var cskill8 = document.getElementById('cskill8').innerText;
    var cskill9 = document.getElementById('cskill9').innerText;
    var cskill10 = document.getElementById('cskill10').innerText;
    var cskill11 = document.getElementById('cskill11').innerText;
    var cskill12 = document.getElementById('cskill12').innerText;
    var cskill13 = document.getElementById('cskill13').innerText;
    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;
    let tableRowsHTML3 = ``;
    let tableRowsHTML4 = ``;
    let multiHTML = ``;
    let allMb = [];
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** Agility 3: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['A3MSK'].value
      var totalSkills_um = skills.length;
          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';

        const rowHTML = getRowHTML18(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7);
        tableRowsHTML += rowHTML;
    }
    var divTable = document.getElementById('table_tbody');
      divTable.innerHTML += `${tableRowsHTML}` ;
    document.getElementById('agility3_table').appendChild(divTable);

     ////////////*** Agility 3: Courses NOT TAUGHT Table  ***/////////////////////////

              for (let i = 0; i < records.length; i++) {
                const record = records[i];
                const lastName = record.clientLastName.value;
                const dogName = record['dogName'].value + ' ' + lastName;
                const mbNum = record['MindBodyNum'].value;
                const recId = record.Record_number.value;
                const commNum = record.commCount.value;
                const lastComment = record.lastCom.value;
                  if (commNum >= 1){
                    var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                      <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                      <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
                  } else {
                    var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                  }
                allMb.push(mbNum);
                const skills = record['A3_NT'].value
                    let unmaster1 = skills.find((item) => item === cskill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster2 = skills.find((item) => item === cskill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster3 = skills.find((item) => item === cskill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster4 = skills.find((item) => item === cskill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster5 = skills.find((item) => item === cskill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster6 = skills.find((item) => item === cskill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster7 = skills.find((item) => item === cskill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster8 = skills.find((item) => item === cskill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster9 = skills.find((item) => item === cskill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster10 = skills.find((item) => item === cskill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster11 = skills.find((item) => item === cskill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster12 = skills.find((item) => item === cskill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster13 = skills.find((item) => item === cskill13) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                  const rowHTML = getRowHTML_ag2(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13);
                  tableRowsHTML4 += rowHTML;
              }
          
              var divTable4 = document.getElementById('table_tbody4');
              divTable4.innerHTML += `${tableRowsHTML4}` ;
              document.getElementById('agility3nt_table').appendChild(divTable4);
          

             ////////////*** Agility 3: Skills Taught Table  ***/////////////////////////
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
        const mbNum = record['MindBodyNum'].value;
        const recId = record.Record_number.value;
        const commNum = record.commCount.value;
        const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
          allMb.push(mbNum);
              const skillTable = record['ag3Table'].value.reverse();
              // if (skillTable.length > 0) {
              if (skillTable.length === 1) {
                var num = '--';
              } else if (skillTable.length > 1) {
                var num1 = '+ ' + skillTable.length;
                var commentCountDiv = ``
                var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
              } 
              var dateTaught, cSkills, tSkills, comments;
              var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7;
              var cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13;
              if (skillTable.length <= 0) {
                cSkills = '--';
                tSkills = '--';
                dateTaught = '--';
                comments = '--';
                unmaster1 = '--';
                unmaster2 = '--';
                unmaster3 = '--';
                unmaster4 = '--';
                unmaster5 = '--';
                unmaster6 = '--';
                unmaster7 = '--';

      
                  const rowHTML = getRowHTML19(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, comments);
                  tableRowsHTML2 += rowHTML;

                  cmaster1 = '--';
                  cmaster2 = '--';
                  cmaster3 = '--';
                  cmaster4 = '--';
                  cmaster5 = '--';
                  cmaster6 = '--';
                  cmaster7 = '--';
                  cmaster8 = '--';
                  cmaster9 = '--';
                  cmaster10 = '--';
                  cmaster11 = '--';
                  cmaster12 = '--';
                  cmaster13 = '--';

      
                  const rowHTML2 = getRowHTML20(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, comments);
                  tableRowsHTML3 += rowHTML2;

              } else if (skillTable.length > 0){
                cSkills = skillTable[0].value.A3Course.value;
                tSkills = skillTable[0].value.A3MSK_1.value;
                var dateTaught1 = skillTable[0].value.Date.value;
                  let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                
                  comments = skillTable[0].value.Text_area.value;
                  unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                  unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                  unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                  unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                  unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                  unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                  unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';

        
                    const rowHTML = getRowHTML19(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, comments);
                    tableRowsHTML2 += rowHTML;


                    cmaster1 = cSkills == cskill1 ? dateTaught : '--';
                    cmaster2 = cSkills == cskill2 ? dateTaught : '--';
                    cmaster3 = cSkills == cskill3 ? dateTaught : '--';
                    cmaster4 = cSkills == cskill4 ? dateTaught : '--';
                    cmaster5 = cSkills == cskill5 ? dateTaught : '--';
                    cmaster6 = cSkills == cskill6 ? dateTaught : '--';
                    cmaster7 = cSkills == cskill7 ? dateTaught : '--';
                    cmaster8 = cSkills == cskill8 ? dateTaught : '--';
                    cmaster9 = cSkills == cskill9 ? dateTaught : '--';
                    cmaster10 = cSkills == cskill10 ? dateTaught : '--';
                    cmaster11 = cSkills == cskill11 ? dateTaught : '--';
                    cmaster12 = cSkills == cskill12 ? dateTaught : '--';
                    cmaster13 = cSkills == cskill13 ? dateTaught : '--';

        
                    const rowHTML2 = getRowHTML20(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, comments);
                    tableRowsHTML3 += rowHTML2;



                    if (skillTable.length >= 2) {
                      //skillTable = skillTable.splice(1);
                      num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;

                    for (let j = 0; j < skillTable.length; j++) {
                      var cSkills = skillTable[j].value.A3Course.value;
                      var tSkills = skillTable[j].value.A3MSK_1.value;
                      var dateTaught1 = skillTable[j].value.Date.value;
                      let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                 
                      
                      var comments = skillTable[j].value.Text_area.value
                      var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7;
                      var cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13;
                      unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                      unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                      unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                      unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                      unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                      unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                      unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
      
                        const rowHTML = getRowHTML19_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  comments);
                        tableRowsHTML2 += rowHTML;

                        cmaster1 = cSkills == cskill1 ? dateTaught : '--';
                        cmaster2 = cSkills == cskill2 ? dateTaught : '--';
                        cmaster3 = cSkills == cskill3 ? dateTaught : '--';
                        cmaster4 = cSkills == cskill4 ? dateTaught : '--';
                        cmaster5 = cSkills == cskill5 ? dateTaught : '--';
                        cmaster6 = cSkills == cskill6 ? dateTaught : '--';
                        cmaster7 = cSkills == cskill7 ? dateTaught : '--';
                        cmaster8 = cSkills == cskill8 ? dateTaught : '--';
                        cmaster9 = cSkills == cskill9 ? dateTaught : '--';
                        cmaster10 = cSkills == cskill10 ? dateTaught : '--';
                        cmaster11 = cSkills == cskill11 ? dateTaught : '--';
                        cmaster12 = cSkills == cskill12 ? dateTaught : '--';
                        cmaster13 = cSkills == cskill13 ? dateTaught : '--';
            
                        const rowHTML2 = getRowHTML20_hidden(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, comments);
                        tableRowsHTML3 += rowHTML2;
                    }
                }
              }
        
                 
              
            }
            var divTable2 = document.getElementById('table_tbody2');
            divTable2.innerHTML += `${tableRowsHTML2}` ;
          document.getElementById('agility3sk_table').appendChild(divTable2);

          var divTable3 = document.getElementById('table_tbody3');
          divTable3.innerHTML += `${tableRowsHTML3}` ;
        document.getElementById('agility3ct_table').appendChild(divTable3);

      // }
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const commNum = record.commCount.value;
        const mbNum = record['MindBodyNum'].value;
        if (commNum > 0){
          const lastComment = record.lastCom.value;
          var allIcons = document.querySelectorAll('.commNum');
          var icons = [...allIcons];
          for (var n = 0; n < icons.length; n++) {
            var icon = icons[n];
            var iconId = icon.id;
            if (iconId === mbNum) {
              tippy(icon, {
                content: `${lastComment}`,
                arrow:true
              });
            }
          }
        }
      }
          ////////////*** Agility 2: Table END  ***/////////////////////////
          createModal();
          choicesArr.forEach(skillFunc);

          var divFilter = document.getElementById('newFilter');
            divFilter.className = 'filterClass';
            divFilter.innerHTML += `${multiHTML}`;
            tippy(document.getElementById('updateBtn'), {
              content: `Bulk Update your class now`,
              arrow: true
            });
           document.querySelector('.mbFilter').style.zIndex = '100';
            let selectBox = new Choices("#newFilter", {
              allowHTML: true,
              searchEnabled: true, 
              duplicateItemsAllowed: false, 
              placeholderValue: "Filter by Mindbody#", 
              searchPlaceholderValue: "Search Mindbody#"
            });
           
            // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
            let allSelected = [];
            document.querySelector('#newFilter').addEventListener(
              'change',
              function(event) {
                var selected = event.detail.value;
                allSelected.push(selected);
                console.log(event.detail.value);
              },
              false,
            );
            let allChoices = [];
            
            document.querySelector('#newFilter').addEventListener(
              'choice',
              function(event) {
                // each time a choice is selected
                var choice = event.detail.choice;
                allChoices.push(choice);
                console.log(event.detail.choice);
              },
              false,
            );
            document.querySelector('#newFilter').style.visibility = 'hidden';
          var submitButton = document.createElement('button');
          submitButton.id = 'submit1';
          submitButton.className = 'subButton5'
          submitButton.innerHTML = `Submit Filters`;  
          
          var clearButton = document.createElement('button');
          clearButton.id = 'clear1';
          clearButton.className = 'subButton5'
          clearButton.innerHTML = `Clear Filters`;  
          
          if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
          
          } else {
          document.getElementById('topElement2').appendChild(divFilter);
          document.querySelector('.choices').appendChild(submitButton);
          document.querySelector('.choices').appendChild(clearButton);
          }
          
          document.getElementById('clear1').onclick = function() {
            handleAgility3_Table(records)
            removeHighlightedItems();
          }
          
          document.getElementById('submit1').onclick = function() {
            // var checked = document.querySelectorAll('#newFilter :checked');
            let mb = [];
            console.log('allSelected', allSelected);
            var select = document.getElementById('newFilter');
              var selected = [...select.options]
                              .filter(option => option.selected)
                              .map(option => option.value);

    function filterFromMindbody() {
      var tableData, tr, td, i;
      var filterParams = selected; //split by | to get array of search parameters
        if (window.getComputedStyle(document.querySelector('.agility3sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3ct_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3_container');
        } else if (window.getComputedStyle(document.querySelector('.agility3_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3ct_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3sk_container');
        } else if (window.getComputedStyle(document.querySelector('.agility3_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3ct_container');
        } else if (window.getComputedStyle(document.querySelector('.agility3_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility3sk_container'),null).getPropertyValue('display') === 'none'  && window.getComputedStyle(document.querySelector('.agility3ct_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3nt_container');
        }

  tr = tableData.getElementsByTagName('tr');
  // For each table row, hide those who don't match the search text
  for (i = 0; i< tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
      if (td) {
          var tdValue = td.innerHTML;
          var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
          if ( isMatched.length ) //check length of filtered resultset
              tr[i].style.display = "";
          else
              tr[i].style.display = "none";
      }        
    }
  }
    filterFromMindbody();


}
              
}





export const handleAgility4_Table = async (records) => {
  
    var skill1 = document.getElementById('ag4skill0').innerText;
    var skill2 = document.getElementById('ag4skill1').innerText;
    var skill3 = document.getElementById('ag4skill2').innerText;
    var skill4 = document.getElementById('ag4skill3').innerText;
    var skill5 = document.getElementById('ag4skill4').innerText;
    var skill6 = document.getElementById('ag4skill5').innerText;
    var skill7 = document.getElementById('ag4skill6').innerText;
    var skill8 = document.getElementById('ag4skill7').innerText;
    var skill9 = document.getElementById('ag4skill8').innerText;
    
    var cskill1 = document.getElementById('cskill1').innerText;
    var cskill2 = document.getElementById('cskill2').innerText;
    var cskill3 = document.getElementById('cskill3').innerText;
    var cskill4 = document.getElementById('cskill4').innerText;
    var cskill5 = document.getElementById('cskill5').innerText;
    var cskill6 = document.getElementById('cskill6').innerText;
    var cskill7 = document.getElementById('cskill7').innerText;
    var cskill8 = document.getElementById('cskill8').innerText;
    var cskill9 = document.getElementById('cskill9').innerText;
    var cskill10 = document.getElementById('cskill10').innerText;
    var cskill11 = document.getElementById('cskill11').innerText;
    var cskill12 = document.getElementById('cskill12').innerText;
    var cskill13 = document.getElementById('cskill13').innerText;
    var cskill14 = document.getElementById('cskill14').innerText;
    var cskill15 = document.getElementById('cskill15').innerText;

    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;
    let tableRowsHTML3 = ``;
    let tableRowsHTML4 = ``;
    let multiHTML = ``;
    let allMb = [];
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** AGILITY 4: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);
      const skills = record['A4MSK'].value
      var totalSkills_um = skills.length;
          let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';

        const rowHTML = getRowHTML182(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9);
        tableRowsHTML += rowHTML;
    }
    var divTable = document.getElementById('table_tbody');
      divTable.innerHTML += `${tableRowsHTML}` ;
    document.getElementById('agility4_table').appendChild(divTable);

     ////////////*** Agility 4: Courses NOT TAUGHT Table  ***/////////////////////////

              for (let i = 0; i < records.length; i++) {
                const record = records[i];
                const lastName = record.clientLastName.value;
                const dogName = record['dogName'].value + ' ' + lastName;
                const mbNum = record['MindBodyNum'].value;
                const recId = record.Record_number.value;
                const commNum = !record.commCount.value || record.commCount.value == undefined ? 0 : record.commCount.value;
                const lastComment = !record.lastCom.value ? '' : record.lastCom.value;
                  if (commNum >= 1){
                    var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                      <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                      <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
                  } else {
                    var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                  }
                allMb.push(mbNum);
                const skills = record['A4_NT'].value
                    let unmaster1 = skills.find((item) => item === cskill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster2 = skills.find((item) => item === cskill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster3 = skills.find((item) => item === cskill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster4 = skills.find((item) => item === cskill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster5 = skills.find((item) => item === cskill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster6 = skills.find((item) => item === cskill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster7 = skills.find((item) => item === cskill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster8 = skills.find((item) => item === cskill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster9 = skills.find((item) => item === cskill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster10 = skills.find((item) => item === cskill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster11 = skills.find((item) => item === cskill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster12 = skills.find((item) => item === cskill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster13 = skills.find((item) => item === cskill13) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster14 = skills.find((item) => item === cskill14) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                    let unmaster15 = skills.find((item) => item === cskill15) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                  const rowHTML = getRowHTML_ag22(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, unmaster15);
                  tableRowsHTML4 += rowHTML;
              }
              //
              var divTable4 = document.getElementById('table_tbody4');
              divTable4.innerHTML += `${tableRowsHTML4}` ;
              document.getElementById('agility4nt_table').appendChild(divTable4);
          

             ////////////*** Agility 4: Skills Taught Table  ***/////////////////////////
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
        const mbNum = record['MindBodyNum'].value;
        const recId = record.Record_number.value;
        const commNum = !record.commCount.value || record.commCount.value == undefined ? 0 : record.commCount.value;
        const lastComment = !record.lastCom.value ? '' : record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
          allMb.push(mbNum);
              const skillTable = record['ag4Table'].value.reverse();
              // if (skillTable.length > 0) {
              if (skillTable.length === 1) {
                var num = '--';
              } else if (skillTable.length > 1) {
                var num1 = '+ ' + skillTable.length;
                var commentCountDiv = ``
                var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
              } 
              var dateTaught, cSkills, tSkills, comments;
              var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9;
              var cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, cmaster14, cmaster15;
              if (skillTable.length <= 0) {
                cSkills = '--';
                tSkills = '--';
                dateTaught = '--';
                comments = '--';
                unmaster1 = '--';
                unmaster2 = '--';
                unmaster3 = '--';
                unmaster4 = '--';
                unmaster5 = '--';
                unmaster6 = '--';
                unmaster7 = '--';
                unmaster8 = '--';
                unmaster9 = '--';
      
                  const rowHTML = getRowHTML192(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                  tableRowsHTML2 += rowHTML;

                  cmaster1 = '--';
                  cmaster2 = '--';
                  cmaster3 = '--';
                  cmaster4 = '--';
                  cmaster5 = '--';
                  cmaster6 = '--';
                  cmaster7 = '--';
                  cmaster8 = '--';
                  cmaster9 = '--';
                  cmaster10 = '--';
                  cmaster11 = '--';
                  cmaster12 = '--';
                  cmaster13 = '--';
                  cmaster14 = '--';
                  cmaster15 = '--';
      
                  const rowHTML2 = getRowHTML202(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, cmaster14, cmaster15, comments);
                  tableRowsHTML3 += rowHTML2;

              } else if (skillTable.length > 0){
                cSkills = skillTable[0].value.A3Course_0.value;
                tSkills = skillTable[0].value.A4MSK.value;
                var dateTaught1 = skillTable[0].value.Date_0.value;
                  let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                
                  comments = skillTable[0].value.Text_area_4.value;
                  unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                  unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                  unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                  unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                  unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                  unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                  unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                  unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
                  unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';

        
                    const rowHTML = getRowHTML192(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                    tableRowsHTML2 += rowHTML;


                    cmaster1 = cSkills == cskill1 ? dateTaught : '--';
                    cmaster2 = cSkills == cskill2 ? dateTaught : '--';
                    cmaster3 = cSkills == cskill3 ? dateTaught : '--';
                    cmaster4 = cSkills == cskill4 ? dateTaught : '--';
                    cmaster5 = cSkills == cskill5 ? dateTaught : '--';
                    cmaster6 = cSkills == cskill6 ? dateTaught : '--';
                    cmaster7 = cSkills == cskill7 ? dateTaught : '--';
                    cmaster8 = cSkills == cskill8 ? dateTaught : '--';
                    cmaster9 = cSkills == cskill9 ? dateTaught : '--';
                    cmaster10 = cSkills == cskill10 ? dateTaught : '--';
                    cmaster11 = cSkills == cskill11 ? dateTaught : '--';
                    cmaster12 = cSkills == cskill12 ? dateTaught : '--';
                    cmaster13 = cSkills == cskill13 ? dateTaught : '--';
                    cmaster14 = cSkills == cskill14 ? dateTaught : '--';
                    cmaster15 = cSkills == cskill15 ? dateTaught : '--';
        
                    const rowHTML2 = getRowHTML202(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, cmaster14, cmaster15, comments);
                    tableRowsHTML3 += rowHTML2;



                    if (skillTable.length >= 2) {
                      //skillTable = skillTable.splice(1);
                      num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;

                    for (let j = 0; j < skillTable.length; j++) {
                      var cSkills = skillTable[j].value.A3Course_0.value;
                      var tSkills = skillTable[j].value.A4MSK.value;
                      var dateTaught1 = skillTable[j].value.Date_0.value;
                      let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                 
                      
                      var comments = skillTable[j].value.Text_area_4.value
                      var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9;
                      var cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, cmaster14, cmaster15;
                      unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
                      unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
                      unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
                      unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
                      unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
                      unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
                      unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
                      unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
                      unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
      
                        const rowHTML = getRowHTML192_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, comments);
                        tableRowsHTML2 += rowHTML;

                        cmaster1 = cSkills == cskill1 ? dateTaught : '--';
                        cmaster2 = cSkills == cskill2 ? dateTaught : '--';
                        cmaster3 = cSkills == cskill3 ? dateTaught : '--';
                        cmaster4 = cSkills == cskill4 ? dateTaught : '--';
                        cmaster5 = cSkills == cskill5 ? dateTaught : '--';
                        cmaster6 = cSkills == cskill6 ? dateTaught : '--';
                        cmaster7 = cSkills == cskill7 ? dateTaught : '--';
                        cmaster8 = cSkills == cskill8 ? dateTaught : '--';
                        cmaster9 = cSkills == cskill9 ? dateTaught : '--';
                        cmaster10 = cSkills == cskill10 ? dateTaught : '--';
                        cmaster11 = cSkills == cskill11 ? dateTaught : '--';
                        cmaster12 = cSkills == cskill12 ? dateTaught : '--';
                        cmaster13 = cSkills == cskill13 ? dateTaught : '--';
                        cmaster14 = cSkills == cskill14 ? dateTaught : '--';
                        cmaster15 = cSkills == cskill15 ? dateTaught : '--';
            
                        const rowHTML2 = getRowHTML202_hidden(mbNum, num, dogName, mbNumHtml, cmaster1, cmaster2, cmaster3, cmaster4, cmaster5, cmaster6, cmaster7, cmaster8, cmaster9, cmaster10, cmaster11, cmaster12, cmaster13, cmaster14, cmaster15, comments);
                        tableRowsHTML3 += rowHTML2;
                    }
                }
              }
        
                 
              
            }
            var divTable2 = document.getElementById('table_tbody2');
            divTable2.innerHTML += `${tableRowsHTML2}` ;
          document.getElementById('agility4sk_table').appendChild(divTable2);

          var divTable3 = document.getElementById('table_tbody3');
          divTable3.innerHTML += `${tableRowsHTML3}` ;
        document.getElementById('agility4ct_table').appendChild(divTable3);

      // }
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const commNum = record.commCount.value;
        const mbNum = record['MindBodyNum'].value;
        if (commNum > 0){
          const lastComment = record.lastCom.value;
          var allIcons = document.querySelectorAll('.commNum');
          var icons = [...allIcons];
          for (var n = 0; n < icons.length; n++) {
            var icon = icons[n];
            var iconId = icon.id;
            if (iconId === mbNum) {
              tippy(icon, {
                content: `${lastComment}`,
                arrow:true
              });
            }
          }
        }
      }
          ////////////*** Agility 4: Table END  ***/////////////////////////
          createModal();
          choicesArr.forEach(skillFunc);

          var divFilter = document.getElementById('newFilter');
            divFilter.className = 'filterClass';
            divFilter.innerHTML += `${multiHTML}`;
            tippy(document.getElementById('updateBtn'), {
              content: `Bulk Update your class now`,
              arrow: true
            });
           document.querySelector('.mbFilter').style.zIndex = '100';
            let selectBox = new Choices("#newFilter", {
              allowHTML: true,
              searchEnabled: true, 
              duplicateItemsAllowed: false, 
              placeholderValue: "Filter by Mindbody#", 
              searchPlaceholderValue: "Search Mindbody#"
            });
           
            // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
            let allSelected = [];
            document.querySelector('#newFilter').addEventListener(
              'change',
              function(event) {
                var selected = event.detail.value;
                allSelected.push(selected);
                console.log(event.detail.value);
              },
              false,
            );
            let allChoices = [];
            
            document.querySelector('#newFilter').addEventListener(
              'choice',
              function(event) {
                // each time a choice is selected
                var choice = event.detail.choice;
                allChoices.push(choice);
                console.log(event.detail.choice);
              },
              false,
            );
            document.querySelector('#newFilter').style.visibility = 'hidden';
          var submitButton = document.createElement('button');
          submitButton.id = 'submit1';
          submitButton.className = 'subButton5'
          submitButton.innerHTML = `Submit Filters`;  
          
          var clearButton = document.createElement('button');
          clearButton.id = 'clear1';
          clearButton.className = 'subButton5'
          clearButton.innerHTML = `Clear Filters`;  
          
          if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
          
          } else {
          document.getElementById('topElement2').appendChild(divFilter);
          document.querySelector('.choices').appendChild(submitButton);
          document.querySelector('.choices').appendChild(clearButton);
          }
          
          document.getElementById('clear1').onclick = function() {
            handleAgility4_Table(records)
            removeHighlightedItems();
          }
          
          document.getElementById('submit1').onclick = function() {
            // var checked = document.querySelectorAll('#newFilter :checked');
            let mb = [];
            console.log('allSelected', allSelected);
            var select = document.getElementById('newFilter');
              var selected = [...select.options]
                              .filter(option => option.selected)
                              .map(option => option.value);


    function filterFromMindbody() {
      var tableData, tr, td, i;
      var filterParams = selected; //split by | to get array of search parameters
        if (window.getComputedStyle(document.querySelector('.agility4sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4ct_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3_container');
        } else if (window.getComputedStyle(document.querySelector('.agility4_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4ct_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3sk_container');
        } else if (window.getComputedStyle(document.querySelector('.agility4_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4sk_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4nt_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3ct_container');
        } else if (window.getComputedStyle(document.querySelector('.agility4_container'),null).getPropertyValue('display') === 'none' && window.getComputedStyle(document.querySelector('.agility4sk_container'),null).getPropertyValue('display') === 'none'  && window.getComputedStyle(document.querySelector('.agility4ct_container'),null).getPropertyValue('display') === 'none') {
          tableData = document.querySelector('.agility3nt_container');
        }

  tr = tableData.getElementsByTagName('tr');
  // For each table row, hide those who don't match the search text
  for (i = 0; i< tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
      if (td) {
          var tdValue = td.innerHTML;
          var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
          if ( isMatched.length ) //check length of filtered resultset
              tr[i].style.display = "";
          else
              tr[i].style.display = "none";
      }        
    }
  }
    filterFromMindbody();


}
              
}

export const handleTricksTable = async (records) => {
  var records = records;

    var skill1 = document.getElementById('skill1').innerText;
    var skill2 = document.getElementById('skill2').innerText;
    var skill3 = document.getElementById('skill3').innerText;
    var skill4 = document.getElementById('skill4').innerText;
    var skill5 = document.getElementById('skill5').innerText;
    var skill6 = document.getElementById('skill6').innerText;
    var skill7 = document.getElementById('skill7').innerText;
    var skill8 = document.getElementById('skill8').innerText;
    var skill9 = document.getElementById('skill9').innerText;
    var skill10 = document.getElementById('skill10').innerText;
    var skill11 = document.getElementById('skill11').innerText;
    var skill12 = document.getElementById('skill12').innerText;
    var skill13 = document.getElementById('skill13').innerText;
    var skill14 = document.getElementById('skill14').innerText;
    let tableRowsHTML = ``;
    let tableRowsHTML2 = ``;

    let multiHTML = ``;
    let allMb = [];
    let allFilters = [];
    let choicesArr = [];
 
    function skillFunc(currentValue, index){
      let val = currentValue.value;
      let label = currentValue.label;
       let optionHTML = `<option value="${val}">${val}</option>`
       multiHTML += optionHTML;
     }
    
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const mbNum = record['MindBodyNum'].value;
      allMb.push(mbNum);
    }
     ////////////*** TRIX: Unmastered Skills Table  ***/////////////////////////
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const lastName = record.clientLastName.value;
      const dogName = record['dogName'].value + ' ' + lastName;
      const mbNum = record['MindBodyNum'].value;
      const recId = record.Record_number.value;
      const commNum = record.commCount.value;
      const lastComment = record.lastCom.value;
      let val =  {
        value: mbNum,
        label: mbNum + '-' + dogName,
        selected: true,
        disabled: false,
        customProperties: {
          description: lastComment
        }
      };
      choicesArr.push(val);
    if (commNum >= 1){
      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
      <div class='icon'><i class="fas fa-comment-alt"></i></div>
      <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

    } else {
      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
    }
  allMb.push(mbNum);
  const skills = record['trixNT'].value
      let unmaster1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster11 = skills.find((item) => item === skill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster12 = skills.find((item) => item === skill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster13 = skills.find((item) => item === skill13) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
      let unmaster14 = skills.find((item) => item === skill14) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
    const rowHTML = getRowHTML_trix(mbNum, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14);
    tableRowsHTML2 += rowHTML;
}
       var divTable2 = document.getElementById('table_tbody2');
              divTable2.innerHTML += `${tableRowsHTML2}` ;
              document.getElementById('tricksNT_table').appendChild(divTable2);
        ////////////*** TRIX: Skills Taught Table  ***/////////////////////////
        
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const lastName = record.clientLastName.value;
        const dogName = record['dogName'].value + ' ' + lastName;
        const mbNum = record['MindBodyNum'].value;
        allMb.push(mbNum);
        const recId = record.Record_number.value;
        const commNum = record.commCount.value;
        const lastComment = record.lastCom.value;
          if (commNum >= 1){
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`

          } else {
            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
          }
        const skillTable = record['Table_3'].value

        if (skillTable.length === 1) {
          var num = '--';
        } else if (skillTable.length > 1) {
          var num1 = '+ ' + skillTable.length;
          var commentCountDiv = ``
          var num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
        }
            var tSkills = skillTable[0].value.TMSK_0.value;
            var dateTaught1 = skillTable[0].value.Date_1.value;
            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
            
            
            var comments = skillTable[0].value.Text_area_1.value
            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14;
              unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
              unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
              unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
              unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
              unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
              unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
              unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
              unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
              unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
              unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';
              unmaster11 = tSkills.find((item) => item === skill11) !== undefined ? dateTaught : '--';
              unmaster12 = tSkills.find((item) => item === skill12) !== undefined ? dateTaught : '--';
              unmaster13 = tSkills.find((item) => item === skill13) !== undefined ? dateTaught : '--';
              unmaster14 = tSkills.find((item) => item === skill14) !== undefined ? dateTaught : '--';
  
  
              const rowHTML = getRowHTML25(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, comments);
              tableRowsHTML += rowHTML;
          // }
           if (skillTable.length >= 2) {
            //skillTable = skillTable.splice(1);
                num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
          for (let j = 0; j < skillTable.length; j++) {
            var tSkills = skillTable[j].value.TMSK_0.value;
            var dateTaught1 = skillTable[j].value.Date_1.value;
            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
            
            
            var comments = skillTable[j].value.Text_area_1.value
            var unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7,  unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14;
              unmaster1 = tSkills.find((item) => item === skill1) !== undefined ? dateTaught : '--';
              unmaster2 = tSkills.find((item) => item === skill2) !== undefined ? dateTaught : '--';
              unmaster3 = tSkills.find((item) => item === skill3) !== undefined ? dateTaught : '--';
              unmaster4 = tSkills.find((item) => item === skill4) !== undefined ? dateTaught : '--';
              unmaster5 = tSkills.find((item) => item === skill5) !== undefined ? dateTaught : '--';
              unmaster6 = tSkills.find((item) => item === skill6) !== undefined ? dateTaught : '--';
              unmaster7 = tSkills.find((item) => item === skill7) !== undefined ? dateTaught : '--';
              unmaster8 = tSkills.find((item) => item === skill8) !== undefined ? dateTaught : '--';
              unmaster9 = tSkills.find((item) => item === skill9) !== undefined ? dateTaught : '--';
              unmaster10 = tSkills.find((item) => item === skill10) !== undefined ? dateTaught : '--';
              unmaster11 = tSkills.find((item) => item === skill11) !== undefined ? dateTaught : '--';
              unmaster12 = tSkills.find((item) => item === skill12) !== undefined ? dateTaught : '--';
              unmaster13 = tSkills.find((item) => item === skill13) !== undefined ? dateTaught : '--';
              unmaster14 = tSkills.find((item) => item === skill14) !== undefined ? dateTaught : '--';
    
              const rowHTML = getRowHTML25_hidden(mbNum, num, dogName, mbNumHtml, unmaster1, unmaster2, unmaster3, unmaster4, unmaster5, unmaster6, unmaster7, unmaster8, unmaster9, unmaster10, unmaster11, unmaster12, unmaster13, unmaster14, comments);
              tableRowsHTML += rowHTML;
            // }
          }
         }
        } 

      var divTable = document.getElementById('table_tbody');
        divTable.innerHTML += `${tableRowsHTML}` ;
      document.getElementById('tricks_table').appendChild(divTable);     
      
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const commNum = record.commCount.value;
        const mbNum = record['MindBodyNum'].value;
        if (commNum > 0){
          const lastComment = record.lastCom.value;
          var allIcons = document.querySelectorAll('.commNum');
          var icons = [...allIcons];
          for (var n = 0; n < icons.length; n++) {
            var icon = icons[n];
            var iconId = icon.id;
            if (iconId === mbNum) {
              tippy(icon, {
                content: `${lastComment}`,
                arrow:true
              });
            }
          }
        }
      }
      createModal();
////////////*** Manners 1: Talking Points Table  ***/////////////////////////

      
choicesArr.forEach(skillFunc);

var divFilter = document.getElementById('newFilter');
  divFilter.className = 'filterClass';
  divFilter.innerHTML += `${multiHTML}`;
  tippy(document.getElementById('updateBtn'), {
    content: `Bulk Update your class now`,
    arrow: true
  });
 document.querySelector('.mbFilter').style.zIndex = '100';
  let selectBox = new Choices("#newFilter", {
    allowHTML: true,
    searchEnabled: true, 
    duplicateItemsAllowed: false, 
    placeholderValue: "Filter by Mindbody#", 
    searchPlaceholderValue: "Search Mindbody#"
  });
 
  // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
  let allSelected = [];
  document.querySelector('#newFilter').addEventListener(
    'change',
    function(event) {
      var selected = event.detail.value;
      allSelected.push(selected);
      console.log(event.detail.value);
    },
    false,
  );
  let allChoices = [];
  
  document.querySelector('#newFilter').addEventListener(
    'choice',
    function(event) {
      // each time a choice is selected
      var choice = event.detail.choice;
      allChoices.push(choice);
      console.log(event.detail.choice);
    },
    false,
  );
  document.querySelector('#newFilter').style.visibility = 'hidden';
var submitButton = document.createElement('button');
submitButton.id = 'submit1';
submitButton.className = 'subButton5'
submitButton.innerHTML = `Submit Filters`;  

var clearButton = document.createElement('button');
clearButton.id = 'clear1';
clearButton.className = 'subButton5'
clearButton.innerHTML = `Clear Filters`;  

if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {

} else {
document.getElementById('topElement2').appendChild(divFilter);
document.querySelector('.choices').appendChild(submitButton);
document.querySelector('.choices').appendChild(clearButton);
}

document.getElementById('clear1').onclick = function() {
  handleTricksTable(records)
  removeHighlightedItems();
}

document.getElementById('submit1').onclick = function() {
  // var checked = document.querySelectorAll('#newFilter :checked');
  let mb = [];
  console.log('allSelected', allSelected);
  var select = document.getElementById('newFilter');
    var selected = [...select.options]
                    .filter(option => option.selected)
                    .map(option => option.value);

        function filterFromMindbody() {
          var tableData, tr, td, i;
          var filterParams = selected; //split by | to get array of search parameters
          var allTablesArr = [];
          tableData = document.querySelector('.tricks_container');
          if (window.getComputedStyle(document.querySelector('.tricksNT_container'),null).getPropertyValue('display') === 'none') {
            tableData = document.querySelector('.tricks_container');
          } else if (window.getComputedStyle(document.querySelector('.tricks_container'),null).getPropertyValue('display') === 'none') {
            tableData = document.querySelector('.tricksNT_container');
          }
 
          tr = tableData.getElementsByTagName('tr');
          // For each table row, hide those who don't match the search text
          for (i = 0; i< tr.length; i++) {
              td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
              if (td) {
                  var tdValue = td.innerHTML;
                  var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                  if ( isMatched.length ) //check length of filtered resultset
                      tr[i].style.display = "";
                  else
                      tr[i].style.display = "none";
              }        
            }
          }
          
            filterFromMindbody();
            
        }         
    }


    export const handleRallyDash = async (records) => {
      var records = records;
    
      var skill1 = document.getElementById('title3').innerText;
      var skill2 = document.getElementById('title4').innerText;
      var skill3 = document.getElementById('title5').innerText
      var skill4 = document.getElementById('title6').innerText
      var skill5 = document.getElementById('title7').innerText;
      var skill6 = document.getElementById('title8').innerText;
      var skill7 = document.getElementById('title9').innerText;
      var skill8 = document.getElementById('title10').innerText;
      var skill9 = document.getElementById('title11').innerText;
      var skill10 = document.getElementById('title12').innerText;
      var skill11 = document.getElementById('title13').innerText;
      var skill12 = document.getElementById('title14').innerText;
      var skill13 = document.getElementById('title15').innerText;
      var skill14 = document.getElementById('title16').innerText;
      var skill15 = document.getElementById('title17').innerText;
      var skill16 = document.getElementById('title18').innerText;
      var skill17 = document.getElementById('title19').innerText;
      var skill18 = document.getElementById('title20').innerText;
      var skill19 = document.getElementById('title21').innerText;
      var skill20 = document.getElementById('title22').innerText;
      var skill21 = document.getElementById('title23').innerText;
      var skill22 = document.getElementById('title24').innerText;
       
        let tableRowsHTML = ``;
        let tableRowsHTML2 = ``;
        let multiHTML = ``;
        let allMb = [];
        let allFilters = [];
        let choicesArr = [];
 
        function skillFunc(currentValue, index){
          let val = currentValue.value;
          let label = currentValue.label;
           let optionHTML = `<option value="${val}">${val}</option>`
           multiHTML += optionHTML;
         }
        
        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const mbNum = record['MindBodyNum'].value;
          allMb.push(mbNum);
        }
         ////////////*** Rally 1: Unmastered Skills Table  ***/////////////////////////
        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const lastName = record.clientLastName.value;
          const dogName = record['dogName'].value + ' ' + lastName;
          const mbNum = record['MindBodyNum'].value;
          const recId = record.Record_number.value;
          const commNum = record.commCount.value;
          const lastComment = record.lastCom.value;
          let val =  {
            value: mbNum,
            label: mbNum + '-' + dogName,
            selected: true,
            disabled: false,
            customProperties: {
              description: lastComment
            }
          };
          choicesArr.push(val);
        if (commNum >= 1){
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
    
        } else {
          var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
        }
      allMb.push(mbNum);

      const skills = record['RNSK'].value;

       let un1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un11 = skills.find((item) => item === skill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un12 = skills.find((item) => item === skill12) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un13 = skills.find((item) => item === skill13) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un14 = skills.find((item) => item === skill14) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un15 = skills.find((item) => item === skill15) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un16 = skills.find((item) => item === skill16) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un17 = skills.find((item) => item === skill17) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un18 = skills.find((item) => item === skill18) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un19 = skills.find((item) => item === skill19) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un20 = skills.find((item) => item === skill20) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un21 = skills.find((item) => item === skill21) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
       let un22 = skills.find((item) => item === skill22) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';

     const rowHTML = getRowHTML_rally(mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, un12, un13, un14, un15, un16, un17, un18, un19, un20, un21, un22);
     tableRowsHTML2 += rowHTML;
 }
        var divTable2 = document.getElementById('table_tbody');
               divTable2.innerHTML += `${tableRowsHTML2}` ;
               document.getElementById('rally1Tab').appendChild(divTable2);
         ////////////*** Manners 1: Skills Taught Table  ***/////////////////////////
            
   for (let i = 0; i < records.length; i++) {
    
            const record = records[i];
            const lastName = record.clientLastName.value;
            const dogName = record['dogName'].value + ' ' + lastName;
            const mbNum = record['MindBodyNum'].value;
            allMb.push(mbNum);
            const recId = record.Record_number.value;
            const commNum = record.commCount.value;
            const lastComment = record.lastCom.value;
            let num;
              if (commNum >= 1){
                var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                  <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                  <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
    
              } else {
                var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
              }
            const skillTable = record['rallyNovSK'].value.reverse();
            console.log('REC:', dogName + " " + lastName, mbNum + ": " + recId, commNum, lastComment,  skillTable);
            if (skillTable.length <= 1) {
              num = '--';
            } else if (skillTable.length > 1) {
              let num1 = '+ ' + skillTable.length;
              var commentCountDiv = ``
              num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
            }
            if(skillTable.length === 0) {
              num = '--';
              var un1 = '-';
              var un2 = '-';
              var un3 = '-';
              var un4 = '-';
              var un5 = '-';
              var un6 = '-';
              var un7 = '-';
              var un8 = '-';
              var un9 = '-';
              var un10 = '-';
              var un11 = '-';
              var un12 = '-';
              var un13 = '-';
              var un14 = '-';
              var un15 = '-';
              var un16 = '-';
              var un17 = '-';
              var un18 = '-';
              var un19 = '-';
              var un20 = '-';
              var un21 = '-';
              var un22 = '-';
              let dateTaught = '-';
              var comments = '';
            } else {
                var skills = skillTable[0].value.RNSK_1.value;
                var dateTaught1 = skillTable[0].value.rallyNovDateTaught.value;
                let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                var comments = skillTable[0].value.rallyNovComs.value;
                  let un1 = skills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                  let un2 = skills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                  let un3 = skills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                  let un4 = skills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                  let un5 = skills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                  let un6 = skills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                  let un7 = skills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                  let un8 = skills.find((item) => item === skill8) !== undefined ? dateTaught : '-ⓧ-';
                  let un9 = skills.find((item) => item === skill9) !== undefined ? dateTaught : '-ⓧ-';
                  let un10 = skills.find((item) => item === skill10) !== undefined ? dateTaught : '-ⓧ-';
                  let un11 = skills.find((item) => item === skill11) !== undefined ? dateTaught : '-ⓧ-';
                  let un12 = skills.find((item) => item === skill12) !== undefined ? dateTaught : '-ⓧ-';
                  let un13 = skills.find((item) => item === skill13) !== undefined ? dateTaught : '-ⓧ-';
                  let un14 = skills.find((item) => item === skill14) !== undefined ? dateTaught : '-ⓧ-';
                  let un15 = skills.find((item) => item === skill15) !== undefined ? dateTaught : '-ⓧ-';
                  let un16 = skills.find((item) => item === skill16) !== undefined ? dateTaught : '-ⓧ-';
                  let un17 = skills.find((item) => item === skill17) !== undefined ? dateTaught : '-ⓧ-';
                  let un18 = skills.find((item) => item === skill18) !== undefined ? dateTaught : '-ⓧ-';
                  let un19 = skills.find((item) => item === skill19) !== undefined ? dateTaught : '-ⓧ-';
                  let un20 = skills.find((item) => item === skill20) !== undefined ? dateTaught : '-ⓧ-';
                  let un21 = skills.find((item) => item === skill21) !== undefined ? dateTaught : '-ⓧ-';
                  let un22 = skills.find((item) => item === skill22) !== undefined ? dateTaught : '-ⓧ-';

     const rowHTML = getRowHTML2_rally(mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, un12, un13, un14, un15, un16, un17, un18, un19, un20, un21, un22, comments);
                    tableRowsHTML += rowHTML;
 
               if (skillTable.length >= 2) {
                //skillTable = skillTable.splice(1);
                 let num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
              for (let j = 0; j < skillTable.length; j++) {
                var tskills = skillTable[j].value.RNSK_1.value;
                var dateTaught1 = skillTable[j].value.rallyNovDateTaught.value;
                let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                var comments = skillTable[j].value.rallyNovComs.value;
                  let un1 = tskills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                  let un2 = tskills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                  let un3 = tskills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                  let un4 = tskills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                  let un5 = tskills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                  let un6 = tskills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                  let un7 = tskills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                  let un8 = tskills.find((item) => item === skill8) !== undefined ? dateTaught : '-ⓧ-';
                  let un9 = tskills.find((item) => item === skill9) !== undefined ? dateTaught : '-ⓧ-';
                  let un10 = tskills.find((item) => item === skill10) !== undefined ? dateTaught : '-ⓧ-';
                  let un11 = tskills.find((item) => item === skill11) !== undefined ? dateTaught : '-ⓧ-';
                  let un12 = tskills.find((item) => item === skill12) !== undefined ? dateTaught : '-ⓧ-';
                  let un13 = tskills.find((item) => item === skill13) !== undefined ? dateTaught : '-ⓧ-';
                  let un14 = tskills.find((item) => item === skill14) !== undefined ? dateTaught : '-ⓧ-';
                  let un15 = tskills.find((item) => item === skill15) !== undefined ? dateTaught : '-ⓧ-';
                  let un16 = tskills.find((item) => item === skill16) !== undefined ? dateTaught : '-ⓧ-';
                  let un17 = tskills.find((item) => item === skill17) !== undefined ? dateTaught : '-ⓧ-';
                  let un18 = tskills.find((item) => item === skill18) !== undefined ? dateTaught : '-ⓧ-';
                  let un19 = tskills.find((item) => item === skill19) !== undefined ? dateTaught : '-ⓧ-';
                  let un20 = tskills.find((item) => item === skill20) !== undefined ? dateTaught : '-ⓧ-';
                  let un21 = tskills.find((item) => item === skill21) !== undefined ? dateTaught : '-ⓧ-';
                  let un22 = tskills.find((item) => item === skill22) !== undefined ? dateTaught : '-ⓧ-';
        
                  const rowHTML = getRowHTML2_rallyHdn(mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, un12, un13, un14, un15, un16, un17, un18, un19, un20, un21, un22, comments);
                  tableRowsHTML += rowHTML;
                }
              }
             }
            } 
    
          var divTable = document.getElementById('table_tbody2');
            divTable.innerHTML += `${tableRowsHTML}` ;
          document.getElementById('rally2SK_Tab').appendChild(divTable);     
          
          for (let i = 0; i < records.length; i++) {
            const record = records[i];
            const commNum = record.commCount.value;
            const mbNum = record['MindBodyNum'].value;
            if (commNum > 0){
              const lastComment = record.lastCom.value;
              var allIcons = document.querySelectorAll('.commNum');
              var icons = [...allIcons];
              for (var n = 0; n < icons.length; n++) {
                var icon = icons[n];
                var iconId = icon.id;
                if (iconId === mbNum) {
                  tippy(icon, {
                    content: `${lastComment}`,
                    arrow:true
                  });
                }
              }
            }
          }
          createModal();
    ////////////*** Manners 1: Talking Points Table  ***/////////////////////////
    
    choicesArr.forEach(skillFunc);

    var divFilter = document.getElementById('newFilter');
      divFilter.className = 'filterClass';
      divFilter.innerHTML += `${multiHTML}`;
      tippy(document.getElementById('updateBtn'), {
        content: `Bulk Update your class now`,
        arrow: true
      });
     document.querySelector('.mbFilter').style.zIndex = '100';
      let selectBox = new Choices("#newFilter", {
        allowHTML: true,
        searchEnabled: true, 
        duplicateItemsAllowed: false, 
        placeholderValue: "Filter by Mindbody#", 
        searchPlaceholderValue: "Search Mindbody#"
      });
     
      // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
      let allSelected = [];
      document.querySelector('#newFilter').addEventListener(
        'change',
        function(event) {
          var selected = event.detail.value;
          allSelected.push(selected);
          console.log(event.detail.value);
        },
        false,
      );
      let allChoices = [];
      
      document.querySelector('#newFilter').addEventListener(
        'choice',
        function(event) {
          // each time a choice is selected
          var choice = event.detail.choice;
          allChoices.push(choice);
          console.log(event.detail.choice);
        },
        false,
      );
      document.querySelector('#newFilter').style.visibility = 'hidden';
    var submitButton = document.createElement('button');
    submitButton.id = 'submit1';
    submitButton.className = 'subButton5'
    submitButton.innerHTML = `Submit Filters`;  
    
    var clearButton = document.createElement('button');
    clearButton.id = 'clear1';
    clearButton.className = 'subButton5'
    clearButton.innerHTML = `Clear Filters`;  
    
    if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
    
    } else {
    document.getElementById('topElement2').appendChild(divFilter);
    document.querySelector('.choices').appendChild(submitButton);
    document.querySelector('.choices').appendChild(clearButton);
    }
    
    document.getElementById('clear1').onclick = function() {
      handleRallyDash(records)
      removeHighlightedItems();
    }
    
    document.getElementById('submit1').onclick = function() {
      // var checked = document.querySelectorAll('#newFilter :checked');
      let mb = [];
      console.log('allSelected', allSelected);
      var select = document.getElementById('newFilter');
        var selected = [...select.options]
                        .filter(option => option.selected)
                        .map(option => option.value);

            function filterFromMindbody() {
              var tableData, tr, td, i;
              var filterParams = selected; //split by | to get array of search parameters
              var allTablesArr = [];
              tableData = document.querySelector('.rally1_container');
              if (window.getComputedStyle(document.querySelector('.rally1_container'),null).getPropertyValue('display') === 'none') {
                tableData = document.querySelector('.rallySkills2_container');
              } else if (window.getComputedStyle(document.querySelector('.rallySkills2_container'),null).getPropertyValue('display') === 'none') {
                tableData = document.querySelector('.rally1_container');
              }
     
              tr = tableData.getElementsByTagName('tr');
              // For each table row, hide those who don't match the search text
              for (i = 0; i< tr.length; i++) {
                  td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                  if (td) {
                      var tdValue = td.innerHTML;
                      var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                      if ( isMatched.length ) //check length of filtered resultset
                          tr[i].style.display = "";
                      else
                          tr[i].style.display = "none";
                  }        
                }
              }
              
                filterFromMindbody();
                
            }         
        }
   
    export const handleRallyAdvDash = async (records) => {
          var records = records;
        
          var skill1 = document.getElementById('title3').innerText;
          var skill2 = document.getElementById('title4').innerText;
          var skill3 = document.getElementById('title5').innerText
          var skill4 = document.getElementById('title6').innerText
          var skill5 = document.getElementById('title7').innerText;
          var skill6 = document.getElementById('title8').innerText;
          var skill7 = document.getElementById('title9').innerText;
          var skill8 = document.getElementById('title10').innerText;
          var skill9 = document.getElementById('title11').innerText;
          var skill10 = document.getElementById('title12').innerText;
          var skill11 = document.getElementById('title13').innerText;
         
           
            let tableRowsHTML = ``;
            let tableRowsHTML2 = ``;
            let multiHTML = ``;
            let allMb = [];
            let allFilters = [];
            let choicesArr = [];
 
            function skillFunc(currentValue, index){
              let val = currentValue.value;
              let label = currentValue.label;
               let optionHTML = `<option value="${val}">${val}</option>`
               multiHTML += optionHTML;
             }
            
            for (let i = 0; i < records.length; i++) {
              const record = records[i];
              const mbNum = record['MindBodyNum'].value;
              allMb.push(mbNum);
            }
             ////////////*** Rally 2: Unmastered Skills Table  ***/////////////////////////
            for (let i = 0; i < records.length; i++) {
              const record = records[i];
              const lastName = record.clientLastName.value;
              const dogName = record['dogName'].value + ' ' + lastName;
              const mbNum = record['MindBodyNum'].value;
              const recId = record.Record_number.value;
              const commNum = record.commCount.value;
              const lastComment = record.lastCom.value;
              let val =  {
                value: mbNum,
                label: mbNum + '-' + dogName,
                selected: true,
                disabled: false,
                customProperties: {
                  description: lastComment
                }
              };
              choicesArr.push(val);
            if (commNum >= 1){
              var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                  <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                  <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
        
            } else {
              var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
            }
          allMb.push(mbNum);
    
          const skills = record['RADSK'].value;
    
           let un1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
           let un11 = skills.find((item) => item === skill11) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
          
    
         const rowHTML = getRowHTML_rally3(mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11);
         tableRowsHTML2 += rowHTML;
     }
            var divTable2 = document.getElementById('table_tbody');
                   divTable2.innerHTML += `${tableRowsHTML2}` ;
                   document.getElementById('rallyAdvTab').appendChild(divTable2);
             ////////////*** Manners 1: Skills Taught Table  ***/////////////////////////
                
       for (let i = 0; i < records.length; i++) {
        
                const record = records[i];
                const lastName = record.clientLastName.value;
                const dogName = record['dogName'].value + ' ' + lastName;
                const mbNum = record['MindBodyNum'].value;
                allMb.push(mbNum);
                const recId = record.Record_number.value;
                const commNum = record.commCount.value;
                const lastComment = record.lastCom.value;
                let num;
                  if (commNum >= 1){
                    var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                      <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                      <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
        
                  } else {
                    var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                  }
                const skillTable = record['rallyAdvTab'].value.reverse();
                
                if (skillTable.length <= 1) {
                  num = '--';
                } else if (skillTable.length > 1) {
                  let num1 = '+ ' + skillTable.length;
                  var commentCountDiv = ``;
                  num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
                }
                if(skillTable.length === 0) {
                  num = '--';
                  var un1 = '-';
                  var un2 = '-';
                  var un3 = '-';
                  var un4 = '-';
                  var un5 = '-';
                  var un6 = '-';
                  var un7 = '-';
                  var un8 = '-';
                  var un9 = '-';
                  var un10 = '-';
                  var un11 = '-';
               
                  let dateTaught = '-';
                  var comments = '';
                } else {
                    var skills = skillTable[0].value.RADSK_1.value;
                    var dateTaught1 = skillTable[0].value.Date_22.value;
                    let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                    var comments = skillTable[0].value.Text_area_22.value;
                      let un1 = skills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                      let un2 = skills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                      let un3 = skills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                      let un4 = skills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                      let un5 = skills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                      let un6 = skills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                      let un7 = skills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                      let un8 = skills.find((item) => item === skill8) !== undefined ? dateTaught : '-ⓧ-';
                      let un9 = skills.find((item) => item === skill9) !== undefined ? dateTaught : '-ⓧ-';
                      let un10 = skills.find((item) => item === skill10) !== undefined ? dateTaught : '-ⓧ-';
                      let un11 = skills.find((item) => item === skill11) !== undefined ? dateTaught : '-ⓧ-';
                      
    
         const rowHTML = getRowHTML_rally3SK (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, comments);
                        tableRowsHTML += rowHTML;
     
                   if (skillTable.length >= 2) {
                    //skillTable = skillTable.splice(1);
                     let num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
                  for (let j = 0; j < skillTable.length; j++) {
                    var tskills = skillTable[j].value.RADSK_1.value;
                    var dateTaught1 = skillTable[j].value.Date_22.value;
                    let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                    var comments = skillTable[j].value.Text_area_22.value;
                      let un1 = tskills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                      let un2 = tskills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                      let un3 = tskills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                      let un4 = tskills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                      let un5 = tskills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                      let un6 = tskills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                      let un7 = tskills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                      let un8 = tskills.find((item) => item === skill8) !== undefined ? dateTaught : '-ⓧ-';
                      let un9 = tskills.find((item) => item === skill9) !== undefined ? dateTaught : '-ⓧ-';
                      let un10 = tskills.find((item) => item === skill10) !== undefined ? dateTaught : '-ⓧ-';
                      let un11 = tskills.find((item) => item === skill11) !== undefined ? dateTaught : '-ⓧ-';
                     
            
                      const rowHTML = getRowHTML3_rallyHdn(mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10, un11, comments);
                      tableRowsHTML += rowHTML;
                    }
                  }
                 }
                } 
        
              var divTable = document.getElementById('table_tbody2');
                divTable.innerHTML += `${tableRowsHTML}` ;
              document.getElementById('rallyAdvSK_table').appendChild(divTable);     
              
              for (let i = 0; i < records.length; i++) {
                const record = records[i];
                const commNum = record.commCount.value;
                const mbNum = record['MindBodyNum'].value;
                if (commNum > 0){
                  const lastComment = record.lastCom.value;
                  var allIcons = document.querySelectorAll('.commNum');
                  var icons = [...allIcons];
                  for (var n = 0; n < icons.length; n++) {
                    var icon = icons[n];
                    var iconId = icon.id;
                    if (iconId === mbNum) {
                      tippy(icon, {
                        content: `${lastComment}`,
                        arrow:true
                      });
                    }
                  }
                }
              }
              createModal();
        ////////////*** Manners 1: Talking Points Table  ***/////////////////////////
        choicesArr.forEach(skillFunc);

        var divFilter = document.getElementById('newFilter');
          divFilter.className = 'filterClass';
          divFilter.innerHTML += `${multiHTML}`;
          tippy(document.getElementById('updateBtn'), {
            content: `Bulk Update your class now`,
            arrow: true
          });
         document.querySelector('.mbFilter').style.zIndex = '100';
          let selectBox = new Choices("#newFilter", {
            allowHTML: true,
            searchEnabled: true, 
            duplicateItemsAllowed: false, 
            placeholderValue: "Filter by Mindbody#", 
            searchPlaceholderValue: "Search Mindbody#"
          });
         
          // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
          let allSelected = [];
          document.querySelector('#newFilter').addEventListener(
            'change',
            function(event) {
              var selected = event.detail.value;
              allSelected.push(selected);
              console.log(event.detail.value);
            },
            false,
          );
          let allChoices = [];
          
          document.querySelector('#newFilter').addEventListener(
            'choice',
            function(event) {
              // each time a choice is selected
              var choice = event.detail.choice;
              allChoices.push(choice);
              console.log(event.detail.choice);
            },
            false,
          );
          document.querySelector('#newFilter').style.visibility = 'hidden';
        var submitButton = document.createElement('button');
        submitButton.id = 'submit1';
        submitButton.className = 'subButton5'
        submitButton.innerHTML = `Submit Filters`;  
        
        var clearButton = document.createElement('button');
        clearButton.id = 'clear1';
        clearButton.className = 'subButton5'
        clearButton.innerHTML = `Clear Filters`;  
        
        if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
        
        } else {
        document.getElementById('topElement2').appendChild(divFilter);
        document.querySelector('.choices').appendChild(submitButton);
        document.querySelector('.choices').appendChild(clearButton);
        }
        
        document.getElementById('clear1').onclick = function() {
          handleRallyAdvDash(records)
          removeHighlightedItems();
        }
        
        document.getElementById('submit1').onclick = function() {
          // var checked = document.querySelectorAll('#newFilter :checked');
          let mb = [];
          console.log('allSelected', allSelected);
          var select = document.getElementById('newFilter');
            var selected = [...select.options]
                            .filter(option => option.selected)
                            .map(option => option.value);

        
                function filterFromMindbody() {
                  var tableData, tr, td, i;
                  var filterParams = selected; //split by | to get array of search parameters
                  var allTablesArr = [];
                  tableData = document.querySelector('#rallyAdvTab');
                  if (window.getComputedStyle(document.querySelector('.rallyAdv_container'),null).getPropertyValue('display') === 'none') {
                    tableData = document.querySelector('#rallyAdvSK_table');
                  } else if (window.getComputedStyle(document.querySelector('.rallyAdvSkills_container'),null).getPropertyValue('display') === 'none') {
                    tableData = document.querySelector('#rallyAdv_table');
                  }
         
                  tr = tableData.getElementsByTagName('tr');
                  // For each table row, hide those who don't match the search text
                  for (i = 0; i< tr.length; i++) {
                      td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                      if (td) {
                          var tdValue = td.innerHTML;
                          var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                          if ( isMatched.length ) //check length of filtered resultset
                              tr[i].style.display = "";
                          else
                              tr[i].style.display = "none";
                      }        
                    }
                  }
                  
                    filterFromMindbody();
                    
                }         
            }


    export const handleRallyExcDash = async (records) => {
              var records = records;
            
              var skill1 = document.getElementById('title3').innerText;
              var skill2 = document.getElementById('title4').innerText;
              var skill3 = document.getElementById('title5').innerText
              var skill4 = document.getElementById('title6').innerText
              var skill5 = document.getElementById('title7').innerText;
              var skill6 = document.getElementById('title8').innerText;
              var skill7 = document.getElementById('title9').innerText;

                let tableRowsHTML = ``;
                let tableRowsHTML2 = ``;
                let multiHTML = ``;
                let allMb = [];
                let allFilters = [];
                let choicesArr = [];
 
                function skillFunc(currentValue, index){
                  let val = currentValue.value;
                  let label = currentValue.label;
                   let optionHTML = `<option value="${val}">${val}</option>`
                   multiHTML += optionHTML;
                 }
                
                for (let i = 0; i < records.length; i++) {
                  const record = records[i];
                  const mbNum = record['MindBodyNum'].value;
                  allMb.push(mbNum);
                }
                 ////////////*** Manners 3: Unmastered Skills Table  ***/////////////////////////
                for (let i = 0; i < records.length; i++) {
                  const record = records[i];
                  const lastName = record.clientLastName.value;
                  const dogName = record['dogName'].value + ' ' + lastName;
                  const mbNum = record['MindBodyNum'].value;
                  const recId = record.Record_number.value;
                  const commNum = record.commCount.value;
                  const lastComment = record.lastCom.value;
                  let val =  {
                    value: mbNum,
                    label: mbNum + '-' + dogName,
                    selected: true,
                    disabled: false,
                    customProperties: {
                      description: lastComment
                    }
                  };
                  choicesArr.push(val);
                if (commNum >= 1){
                  var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                      <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                      <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
            
                } else {
                  var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                }
              allMb.push(mbNum);
        
              const skills = record['REXSK'].value;
        
               let un1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               let un2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               let un3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               let un4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               let un5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               let un6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
               let un7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
              
        
             const rowHTML = getRowHTML_rally4(mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7);
             tableRowsHTML2 += rowHTML;
         }
                var divTable2 = document.getElementById('table_tbody');
                       divTable2.innerHTML += `${tableRowsHTML2}` ;
                       document.getElementById('rallyExcTab').appendChild(divTable2);
                 ////////////*** Manners 1: Skills Taught Table  ***/////////////////////////
                    
           for (let i = 0; i < records.length; i++) {
            
                    const record = records[i];
                    const lastName = record.clientLastName.value;
                    const dogName = record['dogName'].value + ' ' + lastName;
                    const mbNum = record['MindBodyNum'].value;
                    allMb.push(mbNum);
                    const recId = record.Record_number.value;
                    const commNum = record.commCount.value;
                    const lastComment = record.lastCom.value;
                    let num;
                      if (commNum >= 1){
                        var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                          <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                          <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
            
                      } else {
                        var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                      }
                    const skillTable = record['exTab'].value.reverse();
                    
                    if (skillTable.length <= 1) {
                      num = '--';
                    } else if (skillTable.length > 1) {
                      let num1 = '+ ' + skillTable.length;
                      var commentCountDiv = ``;
                      num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
                    }
                    if(skillTable.length === 0) {
                      num = '--';
                      var un1 = '-';
                      var un2 = '-';
                      var un3 = '-';
                      var un4 = '-';
                      var un5 = '-';
                      var un6 = '-';
                      var un7 = '-';
                      let dateTaught = '-';
                      var comments = '';
                    } else {
                        var skills = skillTable[0].value.REXSK_1.value;
                        var dateTaught1 = skillTable[0].value.Date_24.value;
                        let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                        var comments = skillTable[0].value.Text_area_24.value;
                          let un1 = skills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                          let un2 = skills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                          let un3 = skills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                          let un4 = skills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                          let un5 = skills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                          let un6 = skills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                          let un7 = skills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                        
        
             const rowHTML = getRowHTML_rally4SK (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7,  comments);
                            tableRowsHTML += rowHTML;
         
                       if (skillTable.length >= 2) {
                        //skillTable = skillTable.splice(1);
                         let num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
                      for (let j = 0; j < skillTable.length; j++) {
                        var tskills = skillTable[j].value.REXSK_1.value;
                        var dateTaught1 = skillTable[j].value.Date_24.value;
                        let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                        var comments = skillTable[j].value.Text_area_24.value;
                          let un1 = tskills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                          let un2 = tskills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                          let un3 = tskills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                          let un4 = tskills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                          let un5 = tskills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                          let un6 = tskills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                          let un7 = tskills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                         
                
                          const rowHTML = getRowHTML4_rallyHdn(mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, comments);
                          tableRowsHTML += rowHTML;
                        }
                      }
                     }
                    } 
            
                  var divTable = document.getElementById('table_tbody2');
                    divTable.innerHTML += `${tableRowsHTML}` ;
                  document.getElementById('rallyExcSK_Tab').appendChild(divTable);     
                  
                  for (let i = 0; i < records.length; i++) {
                    const record = records[i];
                    const commNum = record.commCount.value;
                    const mbNum = record['MindBodyNum'].value;
                    if (commNum > 0){
                      const lastComment = record.lastCom.value;
                      var allIcons = document.querySelectorAll('.commNum');
                      var icons = [...allIcons];
                      for (var n = 0; n < icons.length; n++) {
                        var icon = icons[n];
                        var iconId = icon.id;
                        if (iconId === mbNum) {
                          tippy(icon, {
                            content: `${lastComment}`,
                            arrow:true
                          });
                        }
                      }
                    }
                  }
                  createModal();
            ////////////*** Manners 1: Talking Points Table  ***/////////////////////////
            
            choicesArr.forEach(skillFunc);

            var divFilter = document.getElementById('newFilter');
              divFilter.className = 'filterClass';
              divFilter.innerHTML += `${multiHTML}`;
              tippy(document.getElementById('updateBtn'), {
                content: `Bulk Update your class now`,
                arrow: true
              });
             document.querySelector('.mbFilter').style.zIndex = '100';
              let selectBox = new Choices("#newFilter", {
                allowHTML: true,
                searchEnabled: true, 
                duplicateItemsAllowed: false, 
                placeholderValue: "Filter by Mindbody#", 
                searchPlaceholderValue: "Search Mindbody#"
              });
             
              // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
              let allSelected = [];
              document.querySelector('#newFilter').addEventListener(
                'change',
                function(event) {
                  var selected = event.detail.value;
                  allSelected.push(selected);
                  console.log(event.detail.value);
                },
                false,
              );
              let allChoices = [];
              
              document.querySelector('#newFilter').addEventListener(
                'choice',
                function(event) {
                  // each time a choice is selected
                  var choice = event.detail.choice;
                  allChoices.push(choice);
                  console.log(event.detail.choice);
                },
                false,
              );
              document.querySelector('#newFilter').style.visibility = 'hidden';
            var submitButton = document.createElement('button');
            submitButton.id = 'submit1';
            submitButton.className = 'subButton5'
            submitButton.innerHTML = `Submit Filters`;  
            
            var clearButton = document.createElement('button');
            clearButton.id = 'clear1';
            clearButton.className = 'subButton5'
            clearButton.innerHTML = `Clear Filters`;  
            
            if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
            
            } else {
            document.getElementById('topElement2').appendChild(divFilter);
            document.querySelector('.choices').appendChild(submitButton);
            document.querySelector('.choices').appendChild(clearButton);
            }
            
            document.getElementById('clear1').onclick = function() {
              handleRallyExcDash(records)
              removeHighlightedItems();
            }
            
            document.getElementById('submit1').onclick = function() {
              // var checked = document.querySelectorAll('#newFilter :checked');
              let mb = [];
              console.log('allSelected', allSelected);
              var select = document.getElementById('newFilter');
                var selected = [...select.options]
                                .filter(option => option.selected)
                                .map(option => option.value);
    
            
                    function filterFromMindbody() {
                      var tableData, tr, td, i;
                      var filterParams = selected; //split by | to get array of search parameters
                      var allTablesArr = [];
                      tableData = document.querySelector('#rallyExcTab');
                      if (window.getComputedStyle(document.querySelector('.rallyExc_container'),null).getPropertyValue('display') === 'none') {
                        tableData = document.querySelector('#rallyExcSK_Tab');
                      } else if (window.getComputedStyle(document.querySelector('.rallyExcSkills_container'),null).getPropertyValue('display') === 'none') {
                        tableData = document.querySelector('#rallyExcTab');
                      }
             
                      tr = tableData.getElementsByTagName('tr');
                      // For each table row, hide those who don't match the search text
                      for (i = 0; i< tr.length; i++) {
                          td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                          if (td) {
                              var tdValue = td.innerHTML;
                              var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                              if ( isMatched.length ) //check length of filtered resultset
                                  tr[i].style.display = "";
                              else
                                  tr[i].style.display = "none";
                          }        
                        }
                      }
                      
                        filterFromMindbody();
                        
                    }         
                }

                export const handleRallyMastDash = async (records) => {
                  var records = records;
                
                  var skill1 = document.getElementById('title3').innerText;
                  var skill2 = document.getElementById('title4').innerText;
                  var skill3 = document.getElementById('title5').innerText
                  var skill4 = document.getElementById('title6').innerText
                  var skill5 = document.getElementById('title7').innerText;
                  var skill6 = document.getElementById('title8').innerText;
                  var skill7 = document.getElementById('title9').innerText;
                  var skill8 = document.getElementById('title10').innerText;
                  var skill9 = document.getElementById('title11').innerText;
                  var skill10 = document.getElementById('title12').innerText;
    
                    let tableRowsHTML = ``;
                    let tableRowsHTML2 = ``;
                    let multiHTML = ``;
                    let allMb = [];
                    let allFilters = [];
                    function skillFunc(currentValue, index){
                      let optionHTML = `<option value="${currentValue}">${currentValue}</option>`
                      multiHTML += optionHTML;
                    }
                
                ////////////*** Tricks: Courses NOT TAUGHT Table  ***/////////////////////////
                
                for (let i = 0; i < records.length; i++) {
                  const record = records[i];
                  const lastName = record.clientLastName.value;
                  const dogName = record['dogName'].value + ' ' + lastName;
                  const mbNum = record['MindBodyNum'].value;
                  const recId = record.Record_number.value;
                  const commNum = !record.commCount.value ? '' : record.commCount.value;
                  const lastComment = record.lastCom.value;
                    if (commNum >= 1){
                      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                          <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                          <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
                
                    } else {
                      var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                    }
                  allMb.push(mbNum);
            
                  const skills = record['RMSK'].value;
            
                   let un1 = skills.find((item) => item === skill1) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un2 = skills.find((item) => item === skill2) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un3 = skills.find((item) => item === skill3) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un4 = skills.find((item) => item === skill4) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un5 = skills.find((item) => item === skill5) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un6 = skills.find((item) => item === skill6) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un7 = skills.find((item) => item === skill7) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un8 = skills.find((item) => item === skill8) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un9 = skills.find((item) => item === skill9) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
                   let un10 = skills.find((item) => item === skill10) == undefined ? '🐕‍🦺Completed' : '-ⓧ-';
            
                 const rowHTML = getRowHTML_rally5(mbNum, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7,un8, un9, un10);
                 tableRowsHTML2 += rowHTML;
             }
                    var divTable2 = document.getElementById('table_tbody');
                           divTable2.innerHTML += `${tableRowsHTML2}` ;
                           document.getElementById('rallyMSTTab').appendChild(divTable2);
                     ////////////*** Manners 1: Skills Taught Table  ***/////////////////////////
                        
               for (let i = 0; i < records.length; i++) {
                
                        const record = records[i];
                        const lastName = record.clientLastName.value;
                        const dogName = record['dogName'].value + ' ' + lastName;
                        const mbNum = record['MindBodyNum'].value;
                        allMb.push(mbNum);
                        const recId = record.Record_number.value;
                        const commNum = record.commCount.value;
                        const lastComment = record.lastCom.value;
                        let num;
                          if (commNum >= 1){
                            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}
                                              <div class='icon'><i class="fas fa-comment-alt"></i></div>
                                              <div id="${mbNum}" class='commNum'>${commNum}</div></p></div>`
                
                          } else {
                            var mbNumHtml = `<div class="aLink" id="${recId}"><p class="simLink" style="color: #2c86e4;">${mbNum}</p></div>`
                          }
                        const skillTable = record['mastTab'].value.reverse();
                        
                        if (skillTable.length <= 1) {
                          num = '--';
                        } else if (skillTable.length > 1) {
                          let num1 = '+ ' + skillTable.length;
                          var commentCountDiv = ``;
                          num = `<input type="button" id="${mbNum}" class='rowBtn' value="${num1}" />`         
                        }
                        if(skillTable.length === 0) {
                          num = '--';
                          var un1 = '-';
                          var un2 = '-';
                          var un3 = '-';
                          var un4 = '-';
                          var un5 = '-';
                          var un6 = '-';
                          var un7 = '-';
                          var un8 = '-';
                          var un9 = '-';
                          var un10 = '-';
                          let dateTaught = '-';
                          var comments = '';
                        } else {
                            var skills = skillTable[0].value.RMSK_1.value;
                            var dateTaught1 = skillTable[0].value.Date_26.value;
                            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                            var comments = skillTable[0].value.Text_area_26.value;
                              let un1 = skills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                              let un2 = skills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                              let un3 = skills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                              let un4 = skills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                              let un5 = skills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                              let un6 = skills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                              let un7 = skills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                              let un8 = skills.find((item) => item === skill8) !== undefined ? dateTaught : '-ⓧ-';
                              let un9 = skills.find((item) => item === skill9) !== undefined ? dateTaught : '-ⓧ-';
                              let un10 = skills.find((item) => item === skill10) !== undefined ? dateTaught : '-ⓧ-';
            
                 const rowHTML = getRowHTML_rally5SK (mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7,un8, un9, un10,  comments);
                                tableRowsHTML += rowHTML;
             
                           if (skillTable.length >= 2) {
                            //skillTable = skillTable.splice(1);
                             let num = `<input type="button" id="bt" class='rowBtnHide' value="-" />`;
                          for (let j = 0; j < skillTable.length; j++) {
                            var tskills = skillTable[j].value.RMSK_1.value;
                            var dateTaught1 = skillTable[j].value.Date_26.value;
                            let dateTaught = format(new Date(add(new Date(dateTaught1), {days: 1})), 'MM/dd/yyyy');
                            var comments = skillTable[j].value.Text_area_26.value;
                              let un1 = tskills.find((item) => item === skill1) !== undefined ? dateTaught : '-ⓧ-';
                              let un2 = tskills.find((item) => item === skill2) !== undefined ? dateTaught : '-ⓧ-';
                              let un3 = tskills.find((item) => item === skill3) !== undefined ? dateTaught : '-ⓧ-';
                              let un4 = tskills.find((item) => item === skill4) !== undefined ? dateTaught : '-ⓧ-';
                              let un5 = tskills.find((item) => item === skill5) !== undefined ? dateTaught : '-ⓧ-';
                              let un6 = tskills.find((item) => item === skill6) !== undefined ? dateTaught : '-ⓧ-';
                              let un7 = tskills.find((item) => item === skill7) !== undefined ? dateTaught : '-ⓧ-';
                              let un8 = tskills.find((item) => item === skill8) !== undefined ? dateTaught : '-ⓧ-';
                              let un9 = tskills.find((item) => item === skill9) !== undefined ? dateTaught : '-ⓧ-';
                              let un10 = tskills.find((item) => item === skill10) !== undefined ? dateTaught : '-ⓧ-';
                    
                              const rowHTML = getRowHTML5_rallyHdn(mbNum, num, dogName, mbNumHtml, un1, un2, un3, un4, un5, un6, un7, un8, un9, un10,comments);
                              tableRowsHTML += rowHTML;
                            }
                          }
                         }
                        } 
                
                      var divTable = document.getElementById('table_tbody2');
                        divTable.innerHTML += `${tableRowsHTML}` ;
                      document.getElementById('rallyMSTSK_Tab').appendChild(divTable);     
                      
                      for (let i = 0; i < records.length; i++) {
                        const record = records[i];
                        const commNum = record.commCount.value;
                        const mbNum = record['MindBodyNum'].value;
                        if (commNum > 0){
                          const lastComment = record.lastCom.value;
                          var allIcons = document.querySelectorAll('.commNum');
                          var icons = [...allIcons];
                          for (var n = 0; n < icons.length; n++) {
                            var icon = icons[n];
                            var iconId = icon.id;
                            if (iconId === mbNum) {
                              tippy(icon, {
                                content: `${lastComment}`,
                                arrow:true
                              });
                            }
                          }
                        }
                      }
                      createModal();
                ////////////*** Manners 1: Talking Points Table  ***/////////////////////////
                
                choicesArr.forEach(skillFunc);

                var divFilter = document.getElementById('newFilter');
                  divFilter.className = 'filterClass';
                  divFilter.innerHTML += `${multiHTML}`;
                  tippy(document.getElementById('updateBtn'), {
                    content: `Bulk Update your class now`,
                    arrow: true
                  });
                 document.querySelector('.mbFilter').style.zIndex = '100';
                  let selectBox = new Choices("#newFilter", {
                    allowHTML: true,
                    searchEnabled: true, 
                    duplicateItemsAllowed: false, 
                    placeholderValue: "Filter by Mindbody#", 
                    searchPlaceholderValue: "Search Mindbody#"
                  });
                 
                  // let selectBox = new vanillaSelectBox("#newFilter",{"maxHeight":180,"maxWidth":200,search:true, placeHolder: "Filter by Mindbody#"});
                  let allSelected = [];
                  document.querySelector('#newFilter').addEventListener(
                    'change',
                    function(event) {
                      var selected = event.detail.value;
                      allSelected.push(selected);
                      console.log(event.detail.value);
                    },
                    false,
                  );
                  let allChoices = [];
                  
                  document.querySelector('#newFilter').addEventListener(
                    'choice',
                    function(event) {
                      // each time a choice is selected
                      var choice = event.detail.choice;
                      allChoices.push(choice);
                      console.log(event.detail.choice);
                    },
                    false,
                  );
                  document.querySelector('#newFilter').style.visibility = 'hidden';
                var submitButton = document.createElement('button');
                submitButton.id = 'submit1';
                submitButton.className = 'subButton5'
                submitButton.innerHTML = `Submit Filters`;  
                
                var clearButton = document.createElement('button');
                clearButton.id = 'clear1';
                clearButton.className = 'subButton5'
                clearButton.innerHTML = `Clear Filters`;  
                
                if(document.getElementById('submit1') !== null && document.getElementById('clear') !== null ) {
                
                } else {
                document.getElementById('topElement2').appendChild(divFilter);
                document.querySelector('.choices').appendChild(submitButton);
                document.querySelector('.choices').appendChild(clearButton);
                }
                
                document.getElementById('clear1').onclick = function() {
                  handleRallyMastDash(records)
                  removeHighlightedItems();
                }
                
                document.getElementById('submit1').onclick = function() {
                  // var checked = document.querySelectorAll('#newFilter :checked');
                  let mb = [];
                  console.log('allSelected', allSelected);
                  var select = document.getElementById('newFilter');
                    var selected = [...select.options]
                                    .filter(option => option.selected)
                                    .map(option => option.value);
        
                
                        function filterFromMindbody() {
                          var tableData, tr, td, i;
                          var filterParams = selected; //split by | to get array of search parameters
                          var allTablesArr = [];
                          tableData = document.querySelector('#rallyMSTTab');
                          if (window.getComputedStyle(document.querySelector('.rallyMST_container'),null).getPropertyValue('display') === 'none') {
                            tableData = document.querySelector('#rallyMSTSK_Tab');
                          } else if (window.getComputedStyle(document.querySelector('.rallyMSTSkills_container'),null).getPropertyValue('display') === 'none') {
                            tableData = document.querySelector('#rallyMSTTab');
                          }
                 
                          tr = tableData.getElementsByTagName('tr');
                          // For each table row, hide those who don't match the search text
                          for (i = 0; i< tr.length; i++) {
                              td = tr[i].getElementsByTagName('td')[2]; // query the Alias column
                              if (td) {
                                  var tdValue = td.innerHTML;
                                  var isMatched = filterParams.filter( function( val ){ return tdValue.indexOf( val ) > -1 }); //check if any val in filterParam array is matching the tdValue
                                  if ( isMatched.length ) //check length of filtered resultset
                                      tr[i].style.display = "";
                                  else
                                      tr[i].style.display = "none";
                              }        
                            }
                          }
                          
                            filterFromMindbody();
                            
                        }         
                    }

export const handleUpdateStatus = async (recId, employee) => {
       var body = {
          "app": 20,
          "id": recId,
          "action": "Start",
          "assignee": employee        
        }
        
        await kintone.api(kintone.api.url('/k/v1/record/status', true), 'PUT', body, function(resp) {
          //success
          console.log(resp);
        }, function(error) {
          //error
          console.log(error);
        });
      }


// Public
// Initiate this function when user clicks on the buttons.
export const handleClick = async (type, event) => {
  const {
    appId,
    record
  } = event;
  console.log('type: ', type);
  console.log('record: ', record);
  // run API, fetch user's existing clock-in data.
  // const paipRecord = await getRecords(appId, query)
  // console.log('paipRecord: ', paipRecord);

};

{
  /* <td class="dropdown">
            <div class="kintoneplugin-table-td-control">
            <div class="kintoneplugin-table-td-control-value">
                <div class="kintoneplugin-input-outer">
                <form action="" name="FILTER">
                  <fieldset>
                    <p class="simLink">
                       <select class="dropDown dayOptions" name="filter_for" size="8">
                           <option value="Monday Evening">Monday Evening</option>
                           <option value="Tuesday Morning">Tuesday Morning</option>
                           <option value="Tuesday Evening">Tuesday Evening</option>
                           <option value="Wednesday Evening">Wednesday Evening</option>
                           <option value="Thursday Morning">Thursday Morning</option>
                           <option value="Friday Morning">Friday Morning</option>
                           <option value="Friday Evening">Friday Evening</option>
                           <option value="Saturday Morning (EAM)h">Saturday Morning (EAM)</option>
                       </select>
                       </p>
                      </fieldset>
                   </form>
               </td>
                
                </div>
            </div>
            </div>
        </td> 
      
  -ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ--ⓧ---

        <div style="position:relative;width:200px;height:25px;border:0;padding:0;margin:0;">
          <select id="myList" style="position:absolute;top:0px;left:0px;width:200px; height:25px;line-height:20px;margin:0;padding:0;"
            onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
          <option></option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
          <input type="search" list="myList" name="displayValue" id="displayValue" 
            placeholder="add/select a value" onfocus="this.select()"
            style="position:absolute;top:0px;left:0px;width:183px;width:180px;#width:180px;height:23px; height:21px;#height:18px;border:1px solid #556;"  >
            <input name="idValue" id="idValue" type="hidden">
          /div>
      
      */
}