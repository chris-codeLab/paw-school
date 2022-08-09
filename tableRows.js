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
  
  export const getRowHTML_rally = (mbNum, dogName, mbNumHtml, unmasteredNov, unmasteredAdv, unmasteredExc, unmasteredMast) => {
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
          <div style="overflow-y:auto">
             ${unmasteredNov}
          </div>
        </td>
      <td class="table-data skills">
          <div style="overflow-y:auto">
            ${unmasteredAdv}
          </div>
        </td>
      <td class="table-data skills">
           <div style="overflow-y:auto">
             ${unmasteredExc}
          </div>
        </td>
      <td class="table-data skills">
          <div style="overflow-y:auto">
            ${unmasteredMast}
          </div>
        </td>
      </tr>
    `
    return rowHTML;
  }
  
  export const getRowHTML_rally2 = (mbNum, dogName, mbNumHtml, unmasteredNov, unmasteredAdv, unmasteredExc, unmasteredMast) => {
    const rowHTML = `
    <tr id="${mbNum}" colspan='3' id='accordian' class="rallyRows2 hidden">
      <td class="table-data">
        ${dogName}
        </td>
      <td class="mindbody">
        ${mbNumHtml}
        </td>
      <td class="table-data skills">
          <div>
             <ul>
             ${unmasteredNov}
             </ul>
          </div>
        </td>
      <td class="table-data skills">
          <div>
            ${unmasteredAdv}
          </div>
        </td>
      <td class="table-data skills">
           <div>
             ${unmasteredExc}
          </div>
        </td>
      <td class="table-data skills">
          <div>
            ${unmasteredMast}
          </div>
        </td>
      </tr>
    `
    return rowHTML;
  }
  
