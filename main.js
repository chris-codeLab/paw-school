import {KintoneRestAPIClient} from "@kintone/rest-api-client";
import {events, buttons, createCustomButton} from './constant';
import {displayAdmin_Modal, displayEsignModal, Toast} from '../src/util-swal';
import {addRecords} from '../src/util';
import { displayEmployeeAddModal, displayPortalModal, displayretailerAddModal, displayAddDistibuterModal } from './rxListModal';
import '../src/css/desktop.css';
import { handleKP1Table, handleKP2Table, getRowHTML, handleMan1Table,  handlePupPETable,  handleAgilityTable, handleAgility2Table,  hideShow, handleMan2_Table, handleMan3_Table, handleMan4_Table, handleAgility3_Table, handleTricksTable, handleRallyDash, handleRallyAdvDash, handleRallyExcDash, handleRallyMastDash, handleAgility4_Table} from './tabs';
import {vanillaSelectBox } from './vanillaSelectBox';
import '../src/css/desktop.css';
import '../src/css/vanillaSelectBox.css';
import Swal from 'sweetalert2';
import {kp1Dash, kp2Dash, man1Dash,man2Dash, man3Dash, man4Dash, pupPEDash, ag1Dash, agi2Dash, agi3Dash, trixDash, rally1Dash, rallySubTable, rallyAdvTable, rallyExcTable, rallyMstTable, agi4Dash} from '../src/tables';
import { Spinner } from '@kintone/kintone-ui-component/esm/js'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { handleBulkUpdates, handleMannerBulkUpdates } from "./bulkUpdate";
// var tablefilter = require('tablefilter');

// const client = new KintoneRestAPIClient();
// let a = ['clientLastName', 'dogName','MindBodyNum','Record_number','commCount', 'lastCom','KinderPup1','kp1_history','KP2MSK', 'kp2sk', 'MP1MSK', 'man1_skillsTaught', 'man1TP', 'Table_27', 'MP2MSK', 'Table_10', 'MP2TPEG', 'Table_26', 'M3UMSK', 'Table_28', 'M4MSK', 'Table_12', 'M4TPEG', 'Table_29', 'PPEMSK', 'Table_14','AMSK', 'Table_16', 'A2MSK', 'A2_NT', 'Table_18', 'A3MSK', 'A3_NT', 'ag3Table', 'A4MSK_0', 'A4_NT', 'ag4Table', 'trixNT', 'Table_3', 'RNSK', 'rallyNovSK', 'RADSK', 'rallyAdvTab', 'REXSK', 'exTab', 'RMSK', 'mastTab']
// 



const getAllRecords = async (appId, qry, fields ) => {
  const client = new KintoneRestAPIClient({
    'auth': {
      'apiToken': 'S7OC8m3fF4M6oqNGmntfW89sA5njbKxOTQpVx9lq'
    }
  });

  const param = {
    app: appId,
    fields:  fields, 
    condition: qry
  }
   const records = await client.record.getAllRecords(param);
   return records;
};

export function showSpaces(spacesArr, showBoolean){
  for(var i = 0; i < spacesArr.length; i++){
  var spaceElementId = spacesArr[i];
  var space = kintone.app.record.getSpaceElement(spaceElementId);
  if(showBoolean) {
      space.parentElement.style.display = "block";
  } else {
      space.parentElement.style.display = "none";
  }
}
}

let func = ()=> {
  let dash = document.getElementById('option').value;
  let recFrame = document.querySelector('.recFrame');
  let ifm = recFrame.querySelector('iframe');
  let dc = ifm.contentDocument.body;
  if(ifm.contentDocument.body.querySelector('#Kinderpup1') !== null) {
    if(dash === 'KP1 Dashboard') {
      dc.querySelector("#Kinderpup1").click();
    } else if (dash === 'KP2 Dashboard') {
      dc.querySelector("#Kinderpup2").click();
    } else if (dash === 'Manners 1 Dashboard') {
      dc.querySelector("#MannersPuppy1").click();
    } else if (dash === 'Manners 2 Dashboard') {
      dc.querySelector("#MannersPuppy2").click();
    }else if (dash === 'Manners 3 Dashboard') {
      dc.querySelector("#Manners3").click();
    }else if (dash === 'Manners 4 Dashboard') {
      dc.querySelector("#Manners4").click();
    }else if (dash === 'PuppyPE Dashboard') {
      dc.querySelector("#PuppyPE").click();
    }else if (dash === 'Agility 1 Dashboard') {
      dc.querySelector("#Agility1").click();
    }else if (dash === 'Agility 2 Dashboard') {
      dc.querySelector("#Agility2").click();
    }else if (dash === 'Agility 3 Dashboard') {
      dc.querySelector("#Agility3").click();
    }else if (dash === 'Agility 4 Dashboard') {
      dc.querySelector("#Agility4").click();
    } else if (dash === 'Tricks Dashboard') {
      dc.querySelector("#Tricks").click();
    } else if (dash === 'Rally Dashboard') {
      dc.querySelector("#RallyNovice").click();
    }

  } else {
    setTimeout(func, 300)
  }

  
}
export const createModal = async () => {
  var tbod = document.getElementsByTagName('tbody');
   tbod.forEach(tb => {
    var aClick = tb.querySelectorAll('.aLink')
    aClick.forEach(a => {
      var recId = a.id;
      var url = `https://pawschool.kintone.com/k/2/show#record=${recId}&tab=none&mode=edit`
      a.addEventListener('click', (event) => {
        setTimeout(func, 7000)
        return Swal.fire({
          width: '100%',
          html:
          `<div id='frame' class='recFrame'>
            <iframe src='${url}'  width='102%' height='700px'>
            </div>`,
            showCancelButton: false,
            showDenyButton: true,
            showConfirmButton: false
          })
      });
    });
   });
};


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



(() => {
  kintone.events.on('app.record.detail.show', function(event) {
    var rec = event.record;
    var recId = rec.$id.value;
    var body = {
      'app': 2,
      'record': recId,
      'order': 'desc',
      'offset': 0,
      'limit': 10
    };

    kintone.api(kintone.api.url('/k/v1/record/comments', true), 'GET', body, function(resp) {
      // success
      
   
      var comments = resp.comments;
      var commCount = comments.length == 0 ? commCount == 0 : comments.length;


      if (comments[0].text == rec.lastCom.value) { 
        return;
      } else {
        var lastComment = comments[0].text;
        var body = {
          "app": 2,
          "id": recId,
          "record": {
              "commCount": {
                  "value": commCount
              },
              "lastCom": {
                "value": lastComment
              }
          }
      };
        
      kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body, function(resp) {
         // success
       
         
      });
    }
  });
})

})();


// function fetch_fast(opt_last_record_id, opt_records) {
//   var records = opt_records || [];
//   var query = opt_last_record_id ? '$id > ' + opt_last_record_id : '';
//   query += ' order by $id asc limit 500';
//   let first500 = [];
//   var params = {
//     app: kintone.app.getId(),
//     query: query
//   };
//   return kintone.api('/k/v1/records', 'GET', params).then(function(resp) {
// if(records.length < 500 && resp.records[resp.records.length - 1].$id.value < 580) {
//   first500 = first500.concat(resp.records);
// } 
//     records = records.concat(resp.records);
    
//     if (resp.records.length === 500) {
//       /* If the maximum number of retrievable records was retrieved, there is a possibility that more records exist.
//         Therefore, the next 500 records that have a record number larger than the last retrieved record are retrieved.
//         Since the records are retrieved all at once in ascending record number order,
//         it is possible to retrieve the next 500 records with these conditions.
//       */
//       return fetch_fast(resp.records[resp.records.length - 1].$id.value, records);
//     }
//     return records;
//   });
// }


function fetch(opt_offset, opt_records) {
  var offset = opt_offset || 0;
  var records = opt_records || [];
  var params = {
      app: kintone.app.getId(),
      query: 'order by $id asc limit 500 offset '
  };
  return kintone.api('/k/v1/records', 'GET', params).then(function(resp) {
      records = records.concat(resp.records);
      // handleKP1Table(records);
      if (resp.records.length === 500) {
          /* If the maximum number of retrievable records was retrieved, there is a possibility that more records exist. 
          Therefore the offset is set to the maximum record limit and the REST API to retrieve records is run again.*/
          return fetch(offset + 500, records);
      }
      return records;
  });
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

var hideSearch = () => {
  document.querySelector('.kintone-app-headermenu-space > #easy-search-form').style.display = 'none';
}

var clearFilter = () => {
  var tbody = document.querySelector()
}

var clickUpdate = async (selected, records) => {
  let dash = document.getElementById('option').value;

let mbClass = selected;
let updates = [];
for (let i = 0; i < mbClass.length; i++) {
  let mbNum = mbClass[i]; 
  var body = {
    'app': 2,
    'query': 'MindBodyNum = "' + mbNum + '" order by $id asc limit 2 offset 0'
  };
  
  kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
    // success
    console.log(resp);
    let record = resp.records[0];
    updates.push(record);
  }, function(error) {
    // error
    console.log(error);
  })
}
console.log('updates', updates);

  await handleBulkUpdates(dash, mbClass, updates);

  


let btnPush = () => {
 
    document.querySelector('.updatebutton').click();
    
}

};

function hideEls () {

 if(document.getElementById('kp1cont') !== null) {document.getElementById('kp1cont').style.display = 'none' }
 if(document.getElementById('kp2cont') !== null) {document.getElementById('kp2cont').style.display = 'none'};
 if(document.getElementById('man1cont') !== null) {document.getElementById('man1cont').style.display = 'none'};
 if(document.getElementById('man2cont') !== null) {document.getElementById('man2cont').style.display = 'none'};
 if(document.getElementById('man3cont') !== null) {document.getElementById('man3cont').style.display = 'none'};
 if(document.getElementById('man4cont') !== null) {document.getElementById('man4cont').style.display = 'none'};
 if(document.getElementById('pupPEcont') !== null) { document.getElementById('pupPEcont').style.display = 'none'};
 if(document.getElementById('agi1cont') !== null) {document.getElementById('agi1cont').style.display = 'none'};
 if(document.getElementById('agi2cont') !== null) {document.getElementById('agi2cont').style.display = 'none'};
 if(document.getElementById('agi3cont') !== null) {document.getElementById('agi3cont').style.display = 'none'};
 if(document.getElementById('trixcont') !== null) {document.getElementById('trixcont').style.display = 'none'};
}

let getKP1 = async () => {
  let fields = ['clientLastName', 'dogName','MindBodyNum','Record_number','commCount', 'lastCom','KinderPup1','kp1_history'];
  let appId = 2;
  let records = await getAllRecords(appId, '', fields);
return records;
};

let getKP2 = async () => {
  let fields = ['clientLastName', 'dogName','MindBodyNum','Record_number','commCount', 'lastCom','KP2MSK', 'kp2sk'];
  let appId = 2;
  let records = await getAllRecords(appId, '', fields);
return records;
};

(() => {
  
  kintone.events.on(events.onShow, async (event) => {
    if (event.viewId === 6276732) { 

      Toast.fire({
        width: '300px',
        icon: 'info',
        title: 'Bulk Update Active'
      })
      let fields;
      fields = ['MindBodyNum','Record_number'];
     const mbNums = getAllRecords(2,'', fields);
    var dropDown = document.createElement('div');
    var html = `<div class="dropdown-div" style="position:absolute;width:200px;height:25px;border:0;padding:0;margin:0;">
        <div class="kintoneplugin-select-outer">
        <div id="options" placeholder="Dashboards" class="kintoneplugin-select">
          <select id="option">
            <option value="KP1 Dashboard">KP1 Dashboard</option> 
            <option value="KP2 Dashboard">KP2 Dashboard</option>
            <option value="Manners 1 Dashboard">Manners/Puppy 1 Dashboard</option>
            <option value="Manners 2 Dashboard">Manners/Puppy 2 Dashboard</option>
            <option value="Manners 3 Dashboard">Manners 3 Dashboard</option>
            <option value="Manners 4 Dashboard">Manners 4 Dashboard</option>
            <option value="PuppyPE Dashboard">PuppyPE Dashboard</option>
            <option value="Agility 1 Dashboard">Agility 1 Dashboard</option>
            <option value="Agility 2 Dashboard">Agility 2 Dashboard</option>
            <option value="Agility 3 Dashboard">Agility 3 Dashboard</option>
            <option value="Agility 4 Dashboard">Agility 4 Dashboard</option>
            <option value="Tricks Dashboard">Tricks Dashboard</option>
            <option value="Rally Dashboard">Rally Novice Dashboard</option>
            <option value="Rally 2 Dashboard">Rally Advanced Dashboard</option>
            <option value="Rally 3 Dashboard">Rally Excellent Dashboard</option>
            <option value="Rally 4 Dashboard">Rally Master Dashboard</option>
            </select>
        </div>  
  </div>`
  dropDown.id = 'dropdownDash';
  dropDown.className = 'dropdown';
  dropDown.innerHTML += html;
  
  kintone.app.getHeaderMenuSpaceElement().appendChild(dropDown);
  
    var body = document.getElementsByTagName("BODY")[0];
    var loading = "...loading Paw School Records";
    const spinner = new Spinner({ isVisible: true });
    let kpFields = ['clientLastName', 'dogName','MindBodyNum','Record_number','commCount', 'lastCom','KinderPup1','kp1_history','KP2MSK', 'kp2sk'];
    let man1Fields = ['clientLastName', 'dogName','MindBodyNum','Record_number','commCount', 'lastCom','Manners1','man1_history', 'man1_skillsTaught', 'man1TP'];
            body.appendChild(spinner.render());
            const appId = 2;
            fields = ['clientLastName', 'dogName','MindBodyNum','Record_number','commCount', 'lastCom','KinderPup1','kp1_history','KP2MSK', 'kp2sk', 'MP1MSK', 'man1_skillsTaught', 'man1TP', 'Table_27', 'MP2MSK', 'Table_10', 'MP2TPEG', 'Table_26', 'M3UMSK', 'Table_28', 'M4MSK', 'Table_12', 'M4TPEG', 'Table_29', 'PPEMSK', 'Table_14','AMSK', 'Table_16', 'A2MSK', 'A2_NT', 'Table_18', 'A3MSK', 'A3_NT', 'ag3Table', 'A4MSK_0', 'A4_NT', 'ag4Table', 'trixNT', 'Table_3', 'RNSK', 'rallyNovSK', 'RADSK', 'rallyAdvTab', 'REXSK', 'exTab', 'RMSK', 'mastTab'];
            const records = await getAllRecords(appId, '', fields);
           
            console.log('records', records);

      spinner.hide();
      // document.querySelector('.kintone-app-headermenu-space > #easy-search-form').style.display = 'none';
    if(document.querySelector('.kintone-app-headermenu-space > #easy-search-form') !== null) {
      hideSearch()
    } else {
      setTimeout(hideSearch, 300)
    }
  
     if (document.getElementById('searchBtn') == null) {
      var srchBtn = document.createElement('button');
      srchBtn.id = 'searchBtn';
      srchBtn.className = 'searchBtn';
      srchBtn.innerHTML = '🔎 Search';//gaia-argoui-app-viewtoggle. gaia-argoui-app-toolbar-menu
      document.querySelector('.gaia-argoui-app-toolbar-menu').appendChild(srchBtn);
      document.querySelector('#searchBtn').onclick = function() {
        window.open(
                "https://pawschool.kintone.com/k/2/?view=6276729", "_blank");
      };
     }
     if (document.getElementById('updateBtn') == null) {
      var updateBtn = document.createElement('button');
      var toolbar = document.querySelector('.gaia-argoui-app-toolbar-menu');
      updateBtn.innerHTML = 'Bulk Update Class';
      updateBtn.id = 'updateBtn';
      updateBtn.className = 'updateClass';
      toolbar.appendChild(updateBtn);
     }
    //https://pawschool.kintone.com/k/2/?view=6276729&q=f6275309%20%3D%20%22100016003%22%20or%20f6275309%20%3D%20%22100010787%22%20or%20f6275309%20%3D%20%22100015811%22%20or%20f6275309%20%3D%20%22100016331%22%20or%20f6275309%20%3D%20%22100016334%22#sort_0=f6275307&order_0=asc&size=100
     document.getElementById('updateBtn').addEventListener('click', (event) => {
      let mb = [];
      var select = document.getElementById('newFilter');
      var selected = [...select.options]
                      .filter(option => option.selected)
                      .map(option => option.value);
                      console.log('mainSelect: ', selected);
     
        if (selected.length <= 0) {
          window.alert('No Class Selected!')
        } else {
   
          clickUpdate(selected, records);
       
        }
     })
      var cont = document.getElementById('ps_cont'); 
      const user = kintone.getLoginUser();
      const userCode = user.code;
      const userName = user.name;
      // document.querySelector('.kintone-app-headermenu-space').style.visibility = 'hidden'
      var dash = kp1Dash();
      cont.appendChild(dash)
      document.getElementById('kp1cont').style.display = 'block';
      hide(document.getElementById('topEl'));
    show(document.getElementById('topElement'));
    hide(document.querySelector('.kp1sk_container'));
    show(document.querySelector('.kp1_container'));
    handleKP1Table(records);

    var kp1sk_button = document.createElement('button');
    kp1sk_button.id = 'kp1_ts_button';
    kp1sk_button.className = 'tabButtonTS2'
    kp1sk_button.innerHTML = 'Skills Taught';

    var kp1_button = document.createElement('button');
    kp1_button.id = 'kp1_button';
    kp1_button.className = 'tabButtonMS'
    kp1_button.innerHTML = 'Unmastered Skills';
    document.getElementById('kp1Button').appendChild(kp1_button);
    document.getElementById('kp1Button').appendChild(kp1sk_button);

    
    document.getElementById('kp1_ts_button').addEventListener('click', function (event) {
      document.querySelector('.kp1_container').style.display = 'none';
      document.querySelector('.kp1sk_container').style.display = 'block';
      document.getElementById('topElement').style.display = 'none';
      document.getElementById('topEl').style.display = 'block';
      createModal();
     
    });

 
    document.getElementById('kp1_button').addEventListener('click', function (event) {
      document.querySelector('.kp1_container').style.display= 'block';
      document.querySelector('.kp1sk_container').style.display = 'none';
      document.getElementById('topElement').style.display = 'block';
      document.getElementById('topEl').style.display = 'none';
      createModal();
  });

 
  var tbody = document.getElementById('table_tbody2');
  var bns = document.getElementsByClassName('rowBtn');
  var hideBns = document.getElementsByClassName('rowBtnHide');
  var buttons = [...hideBns];
  var btns = [...bns];
createModal();
  var handleClick = (buttonClicked, tbody, event) => {
    var tr = tbody.getElementsByTagName("tr");
    let hiddenEl;
    let idArr = [];
    let id = tbody.querySelector('.mindbody > div > p').innerText;
    idArr.push(buttonClicked);
    hiddenEl = tbody.querySelector(`#tr-${buttonClicked}`);
    hiddenEl.classList.add('hidden');
    for (var i = 0; i < tr.length; i++) {
      var rowId = tr[i].id;
     if (buttonClicked === rowId) {
      if (tr[i].classList.contains("hidden")) {      
          tr[i].classList.remove('hidden')
      } 
    } else if (buttonClicked === 'bt') {
      let rowId = tr[i].id;
      console.log('rowId', rowId);
      
      if (tr[i].classList == "hiddenRows") {      
        tr[i].classList.add('hidden');
      } 
      if (tr[i].classList.contains('tr')) {      
        tr[i].classList.remove('hidden');
      } 
    }
   }
   return event; 
  }
  
  var handleClick2 = (rowId, buttonClicked, tbody, event) => {
    var tr = tbody.getElementsByTagName("tr");
  
    for (var i = 0; i < tr.length; i++) {
      if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
     } 
     if (tr[i].id === `tr-${rowId}` && tr[i].classList.contains('hidden')) {      
      tr[i].classList.remove('hidden');
    } 
    }
  }
  
   return event; 
  }
  
    
 btns.forEach(btn => {
      btn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick(buttonClicked,tbody, event)
        }
    });
  
    buttons.forEach(hidebtn => {
      hidebtn.onclick = (clickEvent) => {
        // const bc_parent = hideBtn.parentElement.parentElement.id;
        console.log('clickEvent', clickEvent);
        let rowId = clickEvent.srcElement.parentElement.parentElement.id;
        console.log('CLICK-rowId:', rowId);
        const buttonClicked = clickEvent.target.id;
         handleClick2(rowId, buttonClicked, tbody, event)
        }
    });


  document.getElementById('option').addEventListener('change', (event) => {
      
        var option = document.getElementById('option').value;
        var cont = document.getElementById('ps_cont');
        cont.innerHTML = ``;
        let dash;
      
        if (option == 'KP1 Dashboard') {
          cont.innerHTML = ``;
          dash = kp1Dash();
          cont.appendChild(dash)
          document.getElementById('kp1cont').style.display = 'block';
          hide(document.getElementById('topEl'));
        show(document.getElementById('topElement'));
        hide(document.querySelector('.kp1sk_container'));
        show(document.querySelector('.kp1_container'));
        handleKP1Table(records);

        var kp1sk_button = document.createElement('button');
        kp1sk_button.id = 'kp1_ts_button';
        kp1sk_button.className = 'tabButtonTS2'
        kp1sk_button.innerHTML = 'Skills Taught';

        var kp1_button = document.createElement('button');
        kp1_button.id = 'kp1_button';
        kp1_button.className = 'tabButtonMS'
        kp1_button.innerHTML = 'Unmastered Skills';
        document.getElementById('kp1Button').appendChild(kp1_button);
        document.getElementById('kp1Button').appendChild(kp1sk_button);

        
        document.getElementById('kp1_ts_button').addEventListener('click', function (event) {
          document.querySelector('.kp1_container').style.display = 'none';
          document.querySelector('.kp1sk_container').style.display = 'block';
          document.getElementById('topElement').style.display = 'none';
          document.getElementById('topEl').style.display = 'block';
          createModal();
        });

     
        document.getElementById('kp1_button').addEventListener('click', function (event) {
          document.querySelector('.kp1_container').style.display= 'block';
          document.querySelector('.kp1sk_container').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          document.getElementById('topEl').style.display = 'none';
          createModal();
      });

     
      var tbody = document.getElementById('table_tbody2');
      var bns = document.getElementsByClassName('rowBtn');
      var hideBns = document.getElementsByClassName('rowBtnHide');
      var buttons = [...hideBns];
      var btns = [...bns];

      var handleClick = (buttonClicked, tbody, event) => {
        var tr = tbody.getElementsByTagName("tr");
        for (var i = 0; i < tr.length; i++) {
          var rowId = tr[i].id;
         if (buttonClicked === rowId) {
          if (tr[i].classList.contains("hidden")) {      
              tr[i].classList.remove('hidden')
              createModal();
          } 
        } else if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden');
          } 
        }
       }
       return event; 
      }
      
      var handleClick2 = (buttonClicked, tbody, event) => {
        var tr = tbody.getElementsByTagName("tr");
        
        for (var i = 0; i < tr.length; i++) {
          if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden')
         } 
        }
      }
       return event; 
      }
      
        
     btns.forEach(btn => {
          btn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick(buttonClicked,tbody, event)
            }
        });
      
        buttons.forEach(hidebtn => {
          hidebtn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick2(buttonClicked, tbody, event)
            }
        });

   
       
        createModal();
    
      // myIndexButton3.onclick = function() {
       
       
      
      // }
    }  else if (option == 'KP2 Dashboard') {
      cont.innerHTML = ``;
      dash = kp2Dash();
      cont.appendChild(dash)
      document.getElementById('kp2cont').style.display = 'block';

           document.getElementById('topEl').style.display = 'none';;
          document.getElementById('topElement').style.display = 'block';
          document.querySelector('.kp2sk_container').style.display = 'none';
          document.querySelector('.kp2_container').style.display = 'block';
          handleKP2Table(records);
  
          var kp2sk_button = document.createElement('button');
          kp2sk_button.id = 'kp2_ts_button';
          kp2sk_button.className = 'tabButtonTS2'
          kp2sk_button.innerHTML = 'Skills Taught';
  
          var kp2_button = document.createElement('button');
          kp2_button.id = 'kp2_button';
          kp2_button.className = 'tabButtonMS'
          kp2_button.innerHTML = 'Unmastered Skills';

          document.getElementById('kp2Button').appendChild(kp2_button);
          document.getElementById('kp2Button').appendChild(kp2sk_button);
  
          document.getElementById('kp2_ts_button').addEventListener('click', function (ev) {
            document.querySelector('.kp2_container').style.display = 'none';
            document.querySelector('.kp2sk_container').style.display = 'block';
            document.getElementById('topElement').style.display = 'none';
            document.getElementById('topEl').style.display = 'block';
            createModal();
          })
          document.getElementById('kp2_button').addEventListener('click', function (ev) {

          document.querySelector('.kp2_container').style.display = 'block';
          document.querySelector('.kp2sk_container').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          document.getElementById('topEl').style.display = 'none';
          createModal();
        })
  
        var tbody = document.getElementById('table_tbody2');
        var bns = document.getElementsByClassName('rowBtn');
        var hideBns = document.getElementsByClassName('rowBtnHide');
        var buttons = [...hideBns];
        var btns = [...bns];
  
        var handleClick = (buttonClicked, tbody, event) => {
          var tr = tbody.getElementsByTagName("tr");
          for (var i = 0; i < tr.length; i++) {
            var rowId = tr[i].id;
           if (buttonClicked === rowId) {
            if (tr[i].classList.contains("hidden")) {      
                tr[i].classList.remove('hidden')
                createModal();
            } 
          } else if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden');
            } 
          }
         }
         return event; 
        }
        
        var handleClick2 = (buttonClicked, tbody, event) => {
          var tr = tbody.getElementsByTagName("tr");
          
          for (var i = 0; i < tr.length; i++) {
            if (buttonClicked === 'bt') {
              if (tr[i].classList == "hiddenRows") {      
                tr[i].classList.add('hidden')
           } 
          }
        }
         return event; 
        }
        
          
       btns.forEach(btn => {
            btn.onclick = (clickEvent) => {
              const buttonClicked = clickEvent.target.id;
               handleClick(buttonClicked,tbody, event)
              }
          });
        
          buttons.forEach(hidebtn => {
            hidebtn.onclick = (clickEvent) => {
              const buttonClicked = clickEvent.target.id;
               handleClick2(buttonClicked, tbody, event)
              }
          });
  
          createModal();

    } else if (option == 'Manners 1 Dashboard') {
      cont.innerHTML = ``;
      dash = man1Dash();
      cont.appendChild(dash)
      document.getElementById('man1cont').style.display = 'block';
     document.getElementById('topEl').style.display = 'none';
          document.getElementById('topEl2').style.display = 'none';
          document.querySelector('.man1sk_container').style.display = 'none';
         document.querySelector('.man1tp_container').style.display = 'none';
          document.querySelector('.man1_container').style.display = 'block';
            handleMan1Table(records);
         
          var man1_tp_button = document.createElement('button');
            man1_tp_button.id = 'man1_tp_button';
            man1_tp_button.className = 'tabButtonTP2';
            man1_tp_button.innerHTML = 'Talking Points';
    
          var man1_ts_button = document.createElement('button');
            man1_ts_button.id = 'man1_ts_button';
            man1_ts_button.className = 'tabButtonTS2'
            man1_ts_button.innerHTML = 'Skills Taught';
  
          var man1_button = document.createElement('button');
            man1_button.id = 'man1_button';
            man1_button.className = 'tabButtonMS'
            man1_button.innerHTML = 'Unmastered Skills';

            document.getElementById('man1Button').appendChild(man1_button);
            document.getElementById('man1Button').appendChild(man1_ts_button);
            document.getElementById('man1Button').appendChild(man1_tp_button);
  
            document.getElementById('man1_tp_button').addEventListener('click', (ev)=> {
              document.querySelector('.man1_container').style.display = 'none';
              document.querySelector('.man1sk_container').style.display = 'none';
              document.querySelector('.man1tp_container').style.display = 'block';
              document.getElementById('topElement').style.display = 'none';
              document.getElementById('topEl').style.display = 'none';
              document.getElementById('topEl2').style.display = 'block';
              createModal();
            })
            document.getElementById('man1_ts_button').addEventListener('click', (ev)=> {
              document.querySelector('.man1_container').style.display = 'none';
              document.querySelector('.man1sk_container').style.display = 'block';
              document.querySelector('.man1tp_container').style.display = 'none';
              document.getElementById('topElement').style.display = 'none';
              document.getElementById('topEl').style.display = 'block';
              document.getElementById('topEl2').style.display = 'none';
              var tbody2 = document.getElementById('table_tbody2');
              var row_ele2 = tbody2.getElementsByClassName("hiddenRows");
              row_ele2[0].classList.add('hidden')
              createModal();
            })
  
            document.getElementById('man1_button').addEventListener('click', (ev)=> {
            document.getElementById('topEl').style.display = 'none';
            document.getElementById('topEl2').style.display = 'none';
            document.querySelector('.man1sk_container').style.display = 'none';
           document.querySelector('.man1tp_container').style.display = 'none';
            document.querySelector('.man1_container').style.display = 'block';
            document.getElementById('topElement').style.display = 'block';
            createModal();
          })
  
          var tbody = document.getElementById('table_tbody2');
          var bns = document.getElementsByClassName('rowBtn');
          var hideBns = document.getElementsByClassName('rowBtnHide');
          var buttons = [...hideBns];
          var btns = [...bns];
  
          var handleClick = (buttonClicked, tbody, event) => {
            var tr = tbody.getElementsByTagName("tr");
            // var tr2 = tbody2.getElementsByTagName("tr"); 
             
            for (var i = 0; i < tr.length; i++) {
              var rowId = tr[i].id;
             if (buttonClicked === rowId) {
              if (tr[i].classList.contains("hidden")) {      
                  tr[i].classList.remove('hidden')
                  createModal();
              } 
            } else if (buttonClicked === 'bt') {
              if (tr[i].classList == "hiddenRows") {      
                tr[i].classList.add('hidden');
              } 
            }
           }
           return event; 
          }
          
          var handleClick2 = (buttonClicked, tbody, event) => {
            var tr = tbody.getElementsByTagName("tr");
            
            for (var i = 0; i < tr.length; i++) {
              if (buttonClicked === 'bt') {
                if (tr[i].classList == "hiddenRows") {      
                  tr[i].classList.add('hidden')
             } 
            }
          }
           return event; 
          }
          
            
         btns.forEach(btn => {
              btn.onclick = (clickEvent) => {
                const buttonClicked = clickEvent.target.id;
                 handleClick(buttonClicked,tbody, event)
                }
            });
          
            buttons.forEach(hidebtn => {
              hidebtn.onclick = (clickEvent) => {
                const buttonClicked = clickEvent.target.id;
                 handleClick2(buttonClicked, tbody, event)
                }
            });
    
            createModal();
          
    } else if (option == 'Manners 2 Dashboard') {
      cont.innerHTML = ``;
      dash = man2Dash();
      cont.appendChild(dash)
        document.getElementById('topEl').style.display = 'none';
       document.getElementById('topEl2').style.display = 'none';
        document.querySelector('.man2sk_container').style.display = 'none';
        document.querySelector('.man2tp_container').style.display = 'none';
       document.querySelector('.man2_container').style.display = 'block';
          handleMan2_Table(records);

        var man2_tp_button = document.createElement('button');
          man2_tp_button.id = 'man2_tp_button';
          man2_tp_button.className = 'tabButtonTP2';
          man2_tp_button.innerHTML = 'Talking Points';
  
        var man2_ts_button = document.createElement('button');
          man2_ts_button.id = 'man2_ts_button';
          man2_ts_button.className = 'tabButtonTS2'
          man2_ts_button.innerHTML = 'Skills Taught';

        var man2_button = document.createElement('button');
          man2_button.id = 'man2_button';
          man2_button.className = 'tabButtonMS'
          man2_button.innerHTML = 'Unmastered Skills';

          document.getElementById('man2Button').appendChild(man2_button);
          document.getElementById('man2Button').appendChild(man2_ts_button);
          document.getElementById('man2Button').appendChild(man2_tp_button);

          document.getElementById('man2_tp_button').addEventListener('click', function (ev) {
            document.querySelector('.man2_container').style.display = 'none';
            document.querySelector('.man2sk_container').style.display = 'none';
            document.querySelector('.man2tp_container').style.display = 'block';
            document.getElementById('topElement').style.display = 'none';
            document.getElementById('topEl').style.display = 'none';
            document.getElementById('topEl2').style.display = 'block';
            createModal();
        });
        document.getElementById('man2_ts_button').addEventListener('click', function (ev) {
          document.querySelector('.man2_container').style.display = 'none';
            document.querySelector('.man2sk_container').style.display = 'block';
            document.querySelector('.man2tp_container').style.display = 'none';
            document.getElementById('topElement').style.display = 'none';
            document.getElementById('topEl').style.display = 'block';
            document.getElementById('topEl2').style.display = 'none';
            createModal();
        });
        document.getElementById('man2_button').addEventListener('click', function (ev) {
          document.querySelector('.man2_container').style.display = 'block';
          document.querySelector('.man2sk_container').style.display = 'none';
          document.querySelector('.man2tp_container').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topEl2').style.display = 'none';
          createModal();
        });

    

        var tbody = document.getElementById('table_tbody2');
        var bns = document.getElementsByClassName('rowBtn');
        var hideBns = document.getElementsByClassName('rowBtnHide');
        var buttons = [...hideBns];
        var btns = [...bns];

        var handleClick = (buttonClicked, tbody, event) => {
          var tr = tbody.getElementsByTagName("tr");
          // var tr2 = tbody2.getElementsByTagName("tr"); 
           
          for (var i = 0; i < tr.length; i++) {
            var rowId = tr[i].id;
           if (buttonClicked === rowId) {
            if (tr[i].classList.contains("hidden")) {      
                tr[i].classList.remove('hidden')
                createModal();
            } 
          } else if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden');
            } 
          }
         }
         return event; 
        }
        
        var handleClick2 = (buttonClicked, tbody, event) => {
          var tr = tbody.getElementsByTagName("tr");
          
          for (var i = 0; i < tr.length; i++) {
            if (buttonClicked === 'bt') {
              if (tr[i].classList == "hiddenRows") {      
                tr[i].classList.add('hidden')
           } 
          }
        }
         return event; 
        }
        
          
       btns.forEach(btn => {
            btn.onclick = (clickEvent) => {
              const buttonClicked = clickEvent.target.id;
               handleClick(buttonClicked,tbody, event)
              }
          });
        
          buttons.forEach(hidebtn => {
            hidebtn.onclick = (clickEvent) => {
              const buttonClicked = clickEvent.target.id;
               handleClick2(buttonClicked, tbody, event)
              }
          });
          createModal();

    } else if (option == 'Manners 3 Dashboard') {
      cont.innerHTML = ``;
      dash = man3Dash();
      cont.appendChild(dash)
      document.getElementById('topEl').style.display = 'none';
      document.querySelector('.man3sk_container').style.display = 'none';
      document.querySelector('.man3_container').style.display = 'block';
      handleMan3_Table(records);

    var man3_ts_button = document.createElement('button');
      man3_ts_button.id = 'man3_ts_button';
      man3_ts_button.className = 'tabButtonTS2'
      man3_ts_button.innerHTML = 'Skills Taught';

    var man3_button = document.createElement('button');
      man3_button.id = 'man3_button';
      man3_button.className = 'tabButtonMS'
      man3_button.innerHTML = 'Unmastered Skills';

      document.getElementById('man3Button').appendChild(man3_button);
      document.getElementById('man3Button').appendChild(man3_ts_button);

      document.getElementById('man3_ts_button').addEventListener('click', (e)=> {
        document.querySelector('.man3_container').style.display = 'none';
        document.querySelector('.man3sk_container').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        document.getElementById('topEl').style.display = 'block';
        createModal();
      });

      document.getElementById('man3_button').addEventListener('click', (e)=> {
      document.querySelector('.man3_container').style.display = 'block';
      document.querySelector('.man3sk_container').style.display = 'none';
      document.getElementById('topElement').style.display = 'block';
      document.getElementById('topEl').style.display = 'none';
      createModal();
    });

    var tbody = document.getElementById('table_tbody2');
    var bns = document.getElementsByClassName('rowBtn');
    var hideBns = document.getElementsByClassName('rowBtnHide');
    var buttons = [...hideBns];
    var btns = [...bns];

    var handleClick = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      // var tr2 = tbody2.getElementsByTagName("tr"); 
       
      for (var i = 0; i < tr.length; i++) {
        var rowId = tr[i].id;
       if (buttonClicked === rowId) {
        if (tr[i].classList.contains("hidden")) {      
            tr[i].classList.remove('hidden');
            createModal();
        } 
      } else if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
        } 
      }
     }
     return event; 
    }
    
    var handleClick2 = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      
      for (var i = 0; i < tr.length; i++) {
        if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden')
       } 
      }
    }
     return event; 
    }
    
      
   btns.forEach(btn => {
        btn.onclick = (clickEvent) => {
          const buttonClicked = clickEvent.target.id;
           handleClick(buttonClicked,tbody,event)
          }
      });
    
      buttons.forEach(hidebtn => {
        hidebtn.onclick = (clickEvent) => {
          const buttonClicked = clickEvent.target.id;
           handleClick2(buttonClicked, tbody,  event)
          }
      });
   
      createModal();

    } else if (option == 'Manners 4 Dashboard') {
      cont.innerHTML = ``;
      dash = man4Dash();
      cont.appendChild(dash)
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topEl2').style.display = 'none';
      document.querySelector('.man4sk_container').style.display = 'none';
      document.querySelector('.man4tp_container').style.display = 'none';
      document.querySelector('.man4_container').style.display = 'block';
        handleMan4_Table(records);

      var man4_tp_button = document.createElement('button');
        man4_tp_button.id = 'man4_tp_button';
        man4_tp_button.className = 'tabButtonTP2';
        man4_tp_button.innerHTML = 'Talking Points';

      var man4_ts_button = document.createElement('button');
        man4_ts_button.id = 'man4_ts_button';
        man4_ts_button.className = 'tabButtonTS2'
        man4_ts_button.innerHTML = 'Skills Taught';

      var man4_button = document.createElement('button');
        man4_button.id = 'man4_button';
        man4_button.className = 'tabButtonMS'
        man4_button.innerHTML = 'Unmastered Skills';

        document.getElementById('man4Button').appendChild(man4_button);
        document.getElementById('man4Button').appendChild(man4_ts_button);
        document.getElementById('man4Button').appendChild(man4_tp_button);

      document.getElementById('man4_tp_button').addEventListener('click', (e)=> {
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topEl2').style.display = 'block';
          document.getElementById('topElement').style.display = 'none';
          document.querySelector('.man4sk_container').style.display = 'none';
          document.querySelector('.man4tp_container').style.display = 'block';
          document.querySelector('.man4_container').style.display = 'none';
          createModal();
      });
      document.getElementById('man4_ts_button').addEventListener('click', (e)=> {
          document.getElementById('topEl').style.display = 'block';
          document.getElementById('topEl2').style.display = 'none';
          document.getElementById('topElement').style.display = 'none';
          document.querySelector('.man4sk_container').style.display = 'block';
          document.querySelector('.man4tp_container').style.display = 'none';
          document.querySelector('.man4_container').style.display = 'none';
          createModal();
      });
      document.getElementById('man4_button').addEventListener('click', (e)=> {
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topEl2').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          document.querySelector('.man4sk_container').style.display = 'none';
          document.querySelector('.man4tp_container').style.display = 'none';
          document.querySelector('.man4_container').style.display = 'block';
          createModal();
      });

      var tbody = document.getElementById('table_tbody2');
      var bns = document.getElementsByClassName('rowBtn');
      var hideBns = document.getElementsByClassName('rowBtnHide');
      var buttons = [...hideBns];
      var btns = [...bns];

      var handleClick = (buttonClicked, tbody, event) => {
        var tr = tbody.getElementsByTagName("tr");
        // var tr2 = tbody2.getElementsByTagName("tr"); 
         
        for (var i = 0; i < tr.length; i++) {
          var rowId = tr[i].id;
         if (buttonClicked === rowId) {
          tr[0].classList.add('hidden');
          if (tr[i].classList.contains("hidden")) {   
              tr[i].classList.remove('hidden');
              createModal();
          } 
        } else if (buttonClicked === 'bt') {
             tr[0].classList.remove('hidden');  
          if (tr[i].classList == "hiddenRows") {   
            tr[i].classList.add('hidden');
          } 
        }
       }
       return event; 
      }
      
      var handleClick2 = (buttonClicked, tbody, event) => {
        var tr = tbody.getElementsByTagName("tr");
        
        for (var i = 0; i < tr.length; i++) {
          if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden')
         } 
        }
      }
       return event; 
      }
      
        
     btns.forEach(btn => {
          btn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick(buttonClicked,tbody, tbody2, event)
            }
        });
      
        buttons.forEach(hidebtn => {
          hidebtn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick2(buttonClicked, tbody, event)
            }
        });
     
        createModal();
    } else if (option == 'PuppyPE Dashboard') {
      cont.innerHTML = ``;
      dash = pupPEDash();
      cont.appendChild(dash)
      document.getElementById('topEl').style.display = 'none';
      document.querySelector('.pupPEsk_container').style.display = 'none';
      document.querySelector('.pupPE_container').style.display = 'block';
      handlePupPETable(records);

      var pupPE_ts_button = document.createElement('button');
      pupPE_ts_button.id = 'pupPE_ts_button';
      pupPE_ts_button.className = 'tabButtonTS2'
      pupPE_ts_button.innerHTML = 'Skills Taught';

      var pupPE_button = document.createElement('button');
        pupPE_button.id = 'pupPE_button';
        pupPE_button.className = 'tabButtonMS'
        pupPE_button.innerHTML = 'Unmastered Skills';

        document.getElementById('man1Button').appendChild(pupPE_button);
        document.getElementById('man1Button').appendChild(pupPE_ts_button);

        document.getElementById('pupPE_ts_button').addEventListener('click', (e)=> {
          document.querySelector('.pupPE_container').style.display = 'none';
          document.querySelector('.pupPEsk_container').style.display = 'block';
          document.getElementById('topElement').style.display = 'none';
          document.getElementById('topEl').style.display = 'block';
          createModal();
        })

        document.getElementById('pupPE_button').addEventListener('click', (e)=> {
          document.querySelector('.pupPE_container').style.display = 'block';
          document.querySelector('.pupPEsk_container').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          document.getElementById('topEl').style.display = 'none';
          createModal();
        })

        var tbody = document.getElementById('table_tbody2');
        var bns = document.getElementsByClassName('rowBtn');
        var hideBns = document.getElementsByClassName('rowBtnHide');
        var buttons = [...hideBns];
        var btns = [...bns];

        var handleClick = (buttonClicked, tbody, event) => {
          var tr = tbody.getElementsByTagName("tr");
          for (var i = 0; i < tr.length; i++) {
            var rowId = tr[i].id;
           if (buttonClicked === rowId) {
            if (tr[i].classList.contains("hidden")) {      
                tr[i].classList.remove('hidden');
                createModal();
            } 
          } else if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden');
            } 
          }
         }
         return event; 
        }
        
        var handleClick2 = (buttonClicked, tbody, event) => {
          var tr = tbody.getElementsByTagName("tr");
          for (var i = 0; i < tr.length; i++) {
            if (buttonClicked === 'bt') {
              if (tr[i].classList == "hiddenRows") {      
                tr[i].classList.add('hidden')
           } 
          }
        }
         return event; 
        }
        
          
       btns.forEach(btn => {
            btn.onclick = (clickEvent) => {
              const buttonClicked = clickEvent.target.id;
               handleClick(buttonClicked,tbody, tbody2, event)
              }
          });
        
          buttons.forEach(hidebtn => {
            hidebtn.onclick = (clickEvent) => {
              const buttonClicked = clickEvent.target.id;
               handleClick2(buttonClicked, tbody, tbody2, event)
              }
          });

          createModal();


    } else if (option == 'Agility 1 Dashboard') {
      cont.innerHTML = ``;
      dash = ag1Dash();
      cont.appendChild(dash)
      document.getElementById('topEl').style.display = 'none';
      document.querySelector('.agility1sk_container').style.display = 'none';
      document.querySelector('.agility1_container').style.display = 'block';
         handleAgilityTable(records);

      var agility1_ts_button = document.createElement('button');
      agility1_ts_button.id = 'agility1_ts_button';
      agility1_ts_button.className = 'tabButtonTS2'
      agility1_ts_button.innerHTML = 'Skills Taught';

      var agility1_button = document.createElement('button');
      agility1_button.id = 'agility1_button';
      agility1_button.className = 'tabButtonMS'
      agility1_button.innerHTML = 'Unmastered Skills';

      document.getElementById('man1Button').appendChild(agility1_button);
      document.getElementById('man1Button').appendChild(agility1_ts_button);

      document.getElementById('agility1_ts_button').addEventListener('click', (e)=> {
          document.querySelector('.agility1_container').style.display = 'none';
          document.querySelector('.agility1sk_container').style.display = 'block';
          document.getElementById('topElement').style.display = 'none';
          document.getElementById('topEl').style.display = 'block';
          createModal();
        });

      document.getElementById('agility1_button').addEventListener('click', (e)=> {
          document.querySelector('.agility1_container').style.display = 'block';
          document.querySelector('.agility1sk_container').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          document.getElementById('topEl').style.display = 'none';
          createModal();
        });

        var tbody = document.getElementById('table_tbody2');
        var bns = document.getElementsByClassName('rowBtn');
        var hideBns = document.getElementsByClassName('rowBtnHide');
        var buttons = [...hideBns];
        var btns = [...bns];

      var handleClick = (buttonClicked, tbody, event) => {
        var tr = tbody.getElementsByTagName("tr");
        // var tr2 = tbody2.getElementsByTagName("tr"); 
         
        for (var i = 0; i < tr.length; i++) {
          var rowId = tr[i].id;
         if (buttonClicked === rowId) {
          if (tr[i].classList.contains("hidden")) {      
              tr[i].classList.remove('hidden')
              createModal();
          } 
        } else if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden');
          } 
        }
       }
       return event; 
      }
      
      var handleClick2 = (buttonClicked, tbody, event) => {
        var tr = tbody.getElementsByTagName("tr");
        
        for (var i = 0; i < tr.length; i++) {
          if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden')
         } 
        }
      }
       return event; 
      }
      
        
     btns.forEach(btn => {
          btn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick(buttonClicked,tbody, tbody2, event)
            }
        });
      
        buttons.forEach(hidebtn => {
          hidebtn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick2(buttonClicked, tbody, tbody2, event)
            }
        });

        createModal();
    } else if (option == 'Agility 2 Dashboard') {
      cont.innerHTML = ``;
      dash = agi2Dash();
      cont.appendChild(dash)
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topEl2').style.display = 'none';
      document.getElementById('topEl3').style.display = 'none';
      document.querySelector('.agility2sk_container').style.display = 'none';
      document.querySelector('.agility2ct_container').style.display = 'none';
      document.querySelector('.agility2nt_container').style.display = 'none';
      document.querySelector('.agility2_container').style.display = 'block';
      handleAgility2Table(records);

      var agility2_ct_button = document.createElement('button');
      agility2_ct_button.id = 'agility2_ct_button';
        agility2_ct_button.className = 'tabButtonTP2';
        agility2_ct_button.innerHTML = 'Courses Taught';

      var agility2_nt_button = document.createElement('button');
      agility2_nt_button.id = 'agility2_nt_button';
        agility2_nt_button.className = 'tabButtonTP2';
        agility2_nt_button.innerHTML = 'Courses Not Taught';  

      var agility2_ts_button = document.createElement('button');
      agility2_ts_button.id = 'agility2_ts_button';
        agility2_ts_button.className = 'tabButtonTS2'
        agility2_ts_button.innerHTML = 'Skills Taught';

      var agility2_button = document.createElement('button');
      agility2_button.id = 'agility2_button';
      agility2_button.className = 'tabButtonMS'
      agility2_button.innerHTML = 'Unmastered Skills';

      document.getElementById('man1Button').appendChild(agility2_button);
      document.getElementById('man1Button').appendChild(agility2_ts_button);
      document.getElementById('man1Button').appendChild(agility2_ct_button);
      document.getElementById('man1Button').appendChild(agility2_nt_button);

      document.getElementById('agility2_ct_button').addEventListener('click', (e)=> {
        document.querySelector('.agility2_container').style.display = 'none';
        document.querySelector('.agility2sk_container').style.display = 'none';
        document.querySelector('.agility2ct_container').style.display = 'block';
        document.querySelector('.agility2nt_container').style.display = 'none';
        document.getElementById('topEl').style.display = 'none';
        document.getElementById('topEl2').style.display = 'block';
        document.getElementById('topEl3').style.display = 'none';
        createModal();
      })

      document.getElementById('agility2_nt_button').addEventListener('click', (e)=> {
        document.querySelector('.agility2_container').style.display = 'none';
        document.querySelector('.agility2sk_container').style.display = 'none';
        document.querySelector('.agility2ct_container').style.display = 'none';
        document.querySelector('.agility2nt_container').style.display = 'block';
        document.getElementById('topEl').style.display = 'none';
        document.getElementById('topEl2').style.display = 'none';
        document.getElementById('topElement').style.display = 'block';
        createModal();
    })

    document.getElementById('agility2_ts_button').addEventListener('click', (e)=> {
        document.querySelector('.agility2_container').style.display = 'none';
        document.querySelector('.agility2sk_container').style.display = 'block';
        document.querySelector('.agility2ct_container').style.display = 'none';
        document.querySelector('.agility2nt_container').style.display = 'none';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topEl2').style.display = 'none';
        document.getElementById('topElement').style.display = 'none';
        createModal();
      })
      document.getElementById('agility2_button').addEventListener('click', (e)=> {
        document.querySelector('.agility2_container').style.display = 'block';
        document.querySelector('.agility2sk_container').style.display = 'none';
        document.querySelector('.agility2ct_container').style.display = 'none';
        document.querySelector('.agility2nt_container').style.display = 'none';
        document.getElementById('topElement').style.display = 'block';
        document.getElementById('topEl2').style.display = 'none';
        document.getElementById('topEl').style.display = 'none';
        createModal();
      })
      var tbody = document.getElementById('table_tbody2');
      var tbody2 = document.getElementById('table_tbody3');
      var bns = document.getElementsByClassName('rowBtn');
      var hideBns = document.getElementsByClassName('rowBtnHide');
      var buttons = [...hideBns];
      var btns = [...bns];

      var handleClick = (buttonClicked, tbody, tbody2, event) => {
        var tr = tbody.getElementsByTagName("tr");
        var tr2 = tbody2.getElementsByTagName("tr"); 
         
        for (var i = 0; i < tr.length; i++) {
          var rowId = tr[i].id;
         if (buttonClicked === rowId) {
          if (tr[i].classList.contains("hidden")) {      
              tr[i].classList.remove('hidden')
              createModal();
          } 
        } else if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden');
          } 
        }
      }
        for (var i = 0; i<tr2.length; i++) {
          var rowId = tr2[i].id;
          if (buttonClicked === rowId) {
          if (tr2[i].classList.contains("hidden")) {      
              tr2[i].classList.remove('hidden')
              createModal();
          } 
        } else {
        if (buttonClicked === 'bt') {
          if (tr2[i].classList == "hiddenRows") {      
            tr2[i].classList.add('hidden');
          } 
         }
        }
       }
       return event; 
      }
      
      var handleClick2 = (buttonClicked, tbody, tbody2, event) => {
        var tr = tbody.getElementsByTagName("tr");
        var tr2 = tbody2.getElementsByTagName("tr");  
        for (var i = 0; i < tr.length; i++) {
          if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden')
         } 
        }
      }
        for (var i = 0; i<tr2.length; i++) {
          if (buttonClicked === 'bt') {
          if (tr2[i].classList == "hiddenRows") {      
              tr2[i].classList.add('hidden')
          } 
        }
      }
       return event; 
      }
      
        
     btns.forEach(btn => {
          btn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick(buttonClicked,tbody, tbody2, event)
            }
        });
      
        buttons.forEach(hidebtn => {
          hidebtn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick2(buttonClicked, tbody, tbody2, event)
            }
        });
       
        createModal();
      

      
    } else if (option == 'Agility 3 Dashboard') {
      cont.innerHTML = ``;
      dash = agi3Dash();
      cont.appendChild(dash)
      document.querySelector('.agility3_container').style.display = 'block';
      document.querySelector('.agility3sk_container').style.display = 'none';
      document.querySelector('.agility3ct_container').style.display = 'none';
      document.querySelector('.agility3nt_container').style.display = 'none';
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topEl2').style.display = 'none';
      document.getElementById('topEl3').style.display = 'none';

      handleAgility3_Table(records);

      var agility3_nt_button = document.createElement('button');
        agility3_nt_button.id = 'agility3_nt_button';
        agility3_nt_button.className = 'tabButtonTP2';
        agility3_nt_button.innerHTML = 'Courses Not Taught';  


      var agility3_ct_button = document.createElement('button');
        agility3_ct_button.id = 'agility3_ct_button';
        agility3_ct_button.className = 'tabButtonTP2';
        agility3_ct_button.innerHTML = 'Courses Taught';

      var agility3_ts_button = document.createElement('button');
        agility3_ts_button.id = 'agility3_ts_button';
        agility3_ts_button.className = 'tabButtonTS2'
        agility3_ts_button.innerHTML = 'Skills Taught';

      var agility3_button = document.createElement('button');
        agility3_button.id = 'agility3_button';
        agility3_button.className = 'tabButtonMS'
        agility3_button.innerHTML = 'Unmastered Skills';

        document.getElementById('man1Button').appendChild(agility3_button);
        document.getElementById('man1Button').appendChild(agility3_ts_button);
        document.getElementById('man1Button').appendChild(agility3_ct_button);
        document.getElementById('man1Button').appendChild(agility3_nt_button);

      document.getElementById('agility3_ct_button').addEventListener('click', (e)=> {
        document.querySelector('.agility3_container').style.display = 'none';
        document.querySelector('.agility3sk_container').style.display = 'none';
        document.querySelector('.agility3ct_container').style.display = 'block';
        document.querySelector('.agility3nt_container').style.display = 'none';
        document.getElementById('topEl').style.display = 'none';
        document.getElementById('topEl2').style.display = 'block';
        document.getElementById('topEl3').style.display = 'none';
        document.getElementById('topElement').style.display = 'none';
        createModal();
      });

      document.getElementById('agility3_nt_button').addEventListener('click', (e)=> {
        document.querySelector('.agility3_container').style.display = 'none';
        document.querySelector('.agility3sk_container').style.display = 'none';
        document.querySelector('.agility3ct_container').style.display = 'none';
        document.querySelector('.agility3nt_container').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        document.getElementById('topEl').style.display = 'none';
        document.getElementById('topEl2').style.display = 'none';
        document.getElementById('topEl3').style.display = 'block';
        createModal();
    });

    document.getElementById('agility3_ts_button').addEventListener('click', (e)=> {
        document.querySelector('.agility3_container').style.display = 'none';
        document.querySelector('.agility3sk_container').style.display = 'block';
        document.querySelector('.agility3ct_container').style.display = 'none';
        document.querySelector('.agility3nt_container').style.display = 'none';
        document.getElementById('topElement').style.display = 'none';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topEl2').style.display = 'none';
        document.getElementById('topEl3').style.display = 'none';
        createModal();
         
      });
      document.getElementById('agility3_button').addEventListener('click', (e)=> {
        document.querySelector('.agility3_container').style.display = 'block';
        document.querySelector('.agility3sk_container').style.display = 'none';
        document.querySelector('.agility3ct_container').style.display = 'none';
        document.querySelector('.agility3nt_container').style.display = 'none';
        document.getElementById('topElement').style.display = 'block';
        document.getElementById('topEl').style.display = 'none';
        document.getElementById('topEl2').style.display = 'none';
        document.getElementById('topEl3').style.display = 'none';
        createModal();
      });
    
      var tbody = document.getElementById('table_tbody2');
      var tbody2 = document.getElementById('table_tbody3');
      var bns = document.getElementsByClassName('rowBtn');
      var hideBns = document.getElementsByClassName('rowBtnHide');
      var buttons = [...hideBns];
      var btns = [...bns];

      var handleClick = (buttonClicked, tbody, tbody2, event) => {
        var tr = tbody.getElementsByTagName("tr");
        var tr2 = tbody2.getElementsByTagName("tr"); 
         
        for (var i = 0; i < tr.length; i++) {
          var rowId = tr[i].id;
         if (buttonClicked === rowId) {
          if (tr[i].classList.contains("hidden")) {      
              tr[i].classList.remove('hidden')
              createModal();
          } 
        } else if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden');
          } 
        }
      }
        for (var i = 0; i<tr2.length; i++) {
          var rowId = tr2[i].id;
          if (buttonClicked === rowId) {
          if (tr2[i].classList.contains("hidden")) {      
              tr2[i].classList.remove('hidden')
          } 
        } else {
        if (buttonClicked === 'bt') {
          if (tr2[i].classList == "hiddenRows") {      
            tr2[i].classList.add('hidden');
          } 
         }
        }
       }
       return event; 
      }
      
      var handleClick2 = (buttonClicked, tbody, tbody2, event) => {
        var tr = tbody.getElementsByTagName("tr");
        var tr2 = tbody2.getElementsByTagName("tr");  
        for (var i = 0; i < tr.length; i++) {
          if (buttonClicked === 'bt') {
            if (tr[i].classList == "hiddenRows") {      
              tr[i].classList.add('hidden')
         } 
        }
      }
        for (var i = 0; i<tr2.length; i++) {
          if (buttonClicked === 'bt') {
          if (tr2[i].classList == "hiddenRows") {      
              tr2[i].classList.add('hidden')
          } 
        }
      }
       return event; 
      }
      
        
     btns.forEach(btn => {
          btn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick(buttonClicked,tbody, tbody2, event)
            }
        });
      
        buttons.forEach(hidebtn => {
          hidebtn.onclick = (clickEvent) => {
            const buttonClicked = clickEvent.target.id;
             handleClick2(buttonClicked, tbody, tbody2, event)
            }
        });
       

      
        createModal();
    } else if (option == 'Agility 4 Dashboard') {
          cont.innerHTML = ``;
          dash = agi4Dash();
          cont.appendChild(dash);
          document.querySelector('.agility4_container').style.display = 'block';
          document.querySelector('.agility4sk_container').style.display = 'none';
          document.querySelector('.agility4ct_container').style.display = 'none';
          document.querySelector('.agility4nt_container').style.display = 'none';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topEl2').style.display = 'none';
          document.getElementById('topEl3').style.display = 'none';
          handleAgility4_Table(records);
      
          var agility4_nt_button = document.createElement('button');
          agility4_nt_button.id = 'agility4_nt_button';
          agility4_nt_button.className = 'tabButtonTP2';
          agility4_nt_button.innerHTML = 'Courses Not Taught';  
    
    
          var agility4_ct_button = document.createElement('button');
          agility4_ct_button.id = 'agility4_ct_button';
          agility4_ct_button.className = 'tabButtonTP2';
          agility4_ct_button.innerHTML = 'Courses Taught';
    
          var agility4_ts_button = document.createElement('button');
          agility4_ts_button.id = 'agility4_ts_button';
          agility4_ts_button.className = 'tabButtonTS2'
          agility4_ts_button.innerHTML = 'Skills Taught';
    
          var agility4_button = document.createElement('button');
          agility4_button.id = 'agility4_button';
          agility4_button.className = 'tabButtonMS'
          agility4_button.innerHTML = 'Unmastered Skills';
    
            document.getElementById('man1Button').appendChild(agility4_button);
            document.getElementById('man1Button').appendChild(agility4_ts_button);
            document.getElementById('man1Button').appendChild(agility4_ct_button);
            document.getElementById('man1Button').appendChild(agility4_nt_button);
    
          document.getElementById('agility4_ct_button').addEventListener('click', (e)=> {
            document.querySelector('.agility4_container').style.display = 'none';
            document.querySelector('.agility4sk_container').style.display = 'none';
            document.querySelector('.agility4ct_container').style.display = 'block';
            document.querySelector('.agility4nt_container').style.display = 'none';
            document.getElementById('topEl').style.display = 'none';
            document.getElementById('topEl2').style.display = 'block';
            document.getElementById('topEl3').style.display = 'none';
            document.getElementById('topElement').style.display = 'none';
            createModal();
          });
    
          document.getElementById('agility4_nt_button').addEventListener('click', (e)=> {
            document.querySelector('.agility4_container').style.display = 'none';
            document.querySelector('.agility4sk_container').style.display = 'none';
            document.querySelector('.agility4ct_container').style.display = 'none';
            document.querySelector('.agility4nt_container').style.display = 'block';
            document.getElementById('topElement').style.display = 'none';
            document.getElementById('topEl').style.display = 'none';
            document.getElementById('topEl2').style.display = 'none';
            document.getElementById('topEl3').style.display = 'block';
            createModal();
        });
    
        document.getElementById('agility4_ts_button').addEventListener('click', (e)=> {
            document.querySelector('.agility4_container').style.display = 'none';
            document.querySelector('.agility4sk_container').style.display = 'block';
            document.querySelector('.agility4ct_container').style.display = 'none';
            document.querySelector('.agility4nt_container').style.display = 'none';
            document.getElementById('topElement').style.display = 'none';
            document.getElementById('topEl').style.display = 'block';
            document.getElementById('topEl2').style.display = 'none';
            document.getElementById('topEl3').style.display = 'none';
            createModal();
             
          });
          document.getElementById('agility4_button').addEventListener('click', (e)=> {
            document.querySelector('.agility4_container').style.display = 'block';
            document.querySelector('.agility4sk_container').style.display = 'none';
            document.querySelector('.agility4ct_container').style.display = 'none';
            document.querySelector('.agility4nt_container').style.display = 'none';
            document.getElementById('topElement').style.display = 'block';
            document.getElementById('topEl').style.display = 'none';
            document.getElementById('topEl2').style.display = 'none';
            document.getElementById('topEl3').style.display = 'none';
            createModal();
          });
        
          var tbody = document.getElementById('table_tbody2');
          var tbody2 = document.getElementById('table_tbody3');
          var bns = document.getElementsByClassName('rowBtn');
          var hideBns = document.getElementsByClassName('rowBtnHide');
          var buttons = [...hideBns];
          var btns = [...bns];
    
          var handleClick = (buttonClicked, tbody, tbody2, event) => {
            var tr = tbody.getElementsByTagName("tr");
            var tr2 = tbody2.getElementsByTagName("tr"); 
             
            for (var i = 0; i < tr.length; i++) {
              var rowId = tr[i].id;
             if (buttonClicked === rowId) {
              if (tr[i].classList.contains("hidden")) {      
                  tr[i].classList.remove('hidden')
                  createModal();
              } 
            } else if (buttonClicked === 'bt') {
              if (tr[i].classList == "hiddenRows") {      
                tr[i].classList.add('hidden');
              } 
            }
          }
            for (var i = 0; i<tr2.length; i++) {
              var rowId = tr2[i].id;
              if (buttonClicked === rowId) {
              if (tr2[i].classList.contains("hidden")) {      
                  tr2[i].classList.remove('hidden')
              } 
            } else {
            if (buttonClicked === 'bt') {
              if (tr2[i].classList == "hiddenRows") {      
                tr2[i].classList.add('hidden');
              } 
             }
            }
           }
           return event; 
          }
          
          var handleClick2 = (buttonClicked, tbody, tbody2, event) => {
            var tr = tbody.getElementsByTagName("tr");
            var tr2 = tbody2.getElementsByTagName("tr");  
            for (var i = 0; i < tr.length; i++) {
              if (buttonClicked === 'bt') {
                if (tr[i].classList == "hiddenRows") {      
                  tr[i].classList.add('hidden')
             } 
            }
          }
            for (var i = 0; i<tr2.length; i++) {
              if (buttonClicked === 'bt') {
              if (tr2[i].classList == "hiddenRows") {      
                  tr2[i].classList.add('hidden')
              } 
            }
          }
           return event; 
          }
          
            
         btns.forEach(btn => {
              btn.onclick = (clickEvent) => {
                const buttonClicked = clickEvent.target.id;
                 handleClick(buttonClicked,tbody, tbody2, event)
                }
            });
          
            buttons.forEach(hidebtn => {
              hidebtn.onclick = (clickEvent) => {
                const buttonClicked = clickEvent.target.id;
                 handleClick2(buttonClicked, tbody, tbody2, event)
                }
            });
           
    
          
            createModal();
          
        
    } else if (option == 'Tricks Dashboard') {
      cont.innerHTML = ``;
      dash = trixDash();
      cont.appendChild(dash)
      document.getElementById('topEl').style.display = 'none';
      document.querySelector('.tricksNT_container').style.display = 'none';
      handleTricksTable (records);

      var trix_t_button = document.createElement('button');
        trix_t_button.id = 'trix_nt_button';
        trix_t_button.className = 'tabButtonMS';
        trix_t_button.innerHTML = 'Tricks Taught';  

      var trix_nt_button = document.createElement('button');
        trix_nt_button.id = 'trix_ct_button';
        trix_nt_button.className = 'tabButtonTP2';
        trix_nt_button.innerHTML = 'Tricks Not Taught';

      document.getElementById('man1Button').appendChild(trix_t_button);
      document.getElementById('man1Button').appendChild(trix_nt_button);

      document.getElementById('trix_t_button').addEventListener('click', (e)=> {
          document.querySelector('.tricks_container').style.display = 'block';
          document.querySelector('.tricksNT_container').style.display = 'none';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          createModal();
      });

      document.getElementById('trix_nt_button').addEventListener('click', (e)=> {
        document.querySelector('.tricks_container').style.display = 'none';
        document.querySelector('.tricksNT_container').style.display = 'block';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        createModal();
    });

    var tbody = document.getElementById('table_tbody');
    var bns = document.getElementsByClassName('rowBtn');
    var hideBns = document.getElementsByClassName('rowBtnHide');
    var buttons = [...hideBns];
    var btns = [...bns];

    var handleClick = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        var rowId = tr[i].id;
       if (buttonClicked === rowId) {
        if (tr[i].classList.contains("hidden")) {      
            tr[i].classList.remove('hidden')
          
        } 
      } else if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
        } 
      }
    }
     return event; 
    }

    var handleClick2 = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden')
       } 
      }
    }
     return event; 
    }

    btns.forEach(btn => {
      btn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick(buttonClicked, tbody, event)
        }
    });
  
    buttons.forEach(hidebtn => {
      hidebtn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick2(buttonClicked, tbody, event)
        }
    });
   
     
        createModal();

    } else if (option == 'Rally Dashboard') {
      cont.innerHTML = ``;
      dash = rallySubTable();
      cont.appendChild(dash)
      // document.getElementById('dashType').style.display = 'none';
      document.querySelector('.rally1_container').style.display = 'block';
      document.querySelector('.rallySkills2_container').style.display = 'none';
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topElement').style.display = 'block';
      handleRallyDash(records);

      var rallyNov_button = document.createElement('button');
      rallyNov_button.id = 'rallyNov_button';
      rallyNov_button.className = 'tabButtonMS';
      rallyNov_button.innerHTML = 'Novice Unmastered';  

      var rallyNovSK_button = document.createElement('button');
      rallyNovSK_button.id = 'rallyNovSK';
      rallyNovSK_button.className = 'tabButtonTP2';
      rallyNovSK_button.innerHTML = 'Novice Skills Taught';


      document.getElementById('man1Button').appendChild(rallyNov_button);
      document.getElementById('man1Button').appendChild(rallyNovSK_button);

      document.getElementById('rallyNov_button').addEventListener('click', (e)=> {
          document.querySelector('.rally1_container').style.display = 'block';
          document.querySelector('.rallySkills2_container').style.display = 'none';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          createModal();
         
      });

      document.getElementById('rallyNovSK').addEventListener('click', (e)=> {
        document.querySelector('.rally1_container').style.display = 'none';
        document.querySelector('.rallySkills2_container').style.display = 'block';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        createModal();
    });

    createModal();
    var tbody = document.getElementById('table_tbody2');
    var bns = document.getElementsByClassName('rowBtn');
    var hideBns = document.getElementsByClassName('rowBtnHide');
    var buttons = [...hideBns];
    var btns = [...bns];

    var handleClick = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        var rowId = tr[i].id;
       if (buttonClicked === rowId) {
        if (tr[i].classList.contains("hidden")) {      
            tr[i].classList.remove('hidden')
        } 
      } else if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
        } 
      }
    }
     return event; 
    }

    var handleClick2 = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden')
       } 
      }
    }
     return event; 
    }

    btns.forEach(btn => {
      btn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick(buttonClicked, tbody, event)
        }
    });
  
    buttons.forEach(hidebtn => {
      hidebtn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick2(buttonClicked, tbody, event)
        }
    });
   
            
       

    } else if (option == 'Rally 2 Dashboard') {
      cont.innerHTML = ``;
      dash = rallyAdvTable()
      cont.appendChild(dash)
      // document.getElementById('dashType').style.display = 'none';
      document.querySelector('.rallyAdv_container').style.display = 'block';
      document.querySelector('.rallyAdvSkills_container').style.display = 'none';
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topElement').style.display = 'block';
      handleRallyAdvDash(records);

      var rallyAdv_button = document.createElement('button');
      rallyAdv_button.id = 'rallyAdv_button';
      rallyAdv_button.className = 'tabButtonMS';
      rallyAdv_button.innerHTML = 'Advanced Unmastered';  

      var rallyAdvSK_button = document.createElement('button');
      rallyAdvSK_button.id = 'rallyAdvSK_btn';
      rallyAdvSK_button.className = 'tabButtonTP2';
      rallyAdvSK_button.innerHTML = 'Advanced Skills Taught';


      document.getElementById('man1Button').appendChild(rallyAdv_button);
      document.getElementById('man1Button').appendChild(rallyAdvSK_button);

      document.getElementById('rallyAdv_button').addEventListener('click', (e)=> {
          document.querySelector('.rallyAdv_container').style.display = 'block';
          document.querySelector('.rallyAdvSkills_container').style.display = 'none';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          createModal();
         
      });

      document.getElementById('rallyAdvSK_btn').addEventListener('click', (e)=> {
        document.querySelector('.rallyAdv_container').style.display = 'none';
        document.querySelector('.rallyAdvSkills_container').style.display = 'block';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        createModal();
    });

       
    createModal();

    var tbody = document.getElementById('table_tbody2');
    var bns = document.getElementsByClassName('rowBtn');
    var hideBns = document.getElementsByClassName('rowBtnHide');
    var buttons = [...hideBns];
    var btns = [...bns];

    var handleClick = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        var rowId = tr[i].id;
       if (buttonClicked === rowId) {
        if (tr[i].classList.contains("hidden")) {      
            tr[i].classList.remove('hidden')
        } 
      } else if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
        } 
      }
    }
     return event; 
    }

    var handleClick2 = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden')
       } 
      }
    }
     return event; 
    }

    btns.forEach(btn => {
      btn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick(buttonClicked, tbody, event)
        }
    });
  
    buttons.forEach(hidebtn => {
      hidebtn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick2(buttonClicked, tbody, event)
        }
    });

   
     
    } else if (option == 'Rally 3 Dashboard') {
      cont.innerHTML = ``;
      dash = rallyExcTable();
      cont.appendChild(dash)
      // document.getElementById('dashType').style.display = 'none';
      document.querySelector('.rallyExc_container').style.display = 'block';
      document.querySelector('.rallyExcSkills_container').style.display = 'none';
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topElement').style.display = 'block';
      handleRallyExcDash(records);

      var rallyExc_button = document.createElement('button');
      rallyExc_button.id = 'rallyExc';
      rallyExc_button.className = 'tabButtonMS';
      rallyExc_button.innerHTML = 'Excellent Unmastered';  

      var rallyExcSK_button = document.createElement('button');
      rallyExcSK_button.id = 'rallyExcSK';
      rallyExcSK_button.className = 'tabButtonTP2';
      rallyExcSK_button.innerHTML = 'Excellent Skills Taught';


      document.getElementById('man1Button').appendChild(rallyExc_button);
      document.getElementById('man1Button').appendChild(rallyExcSK_button);

      document.getElementById('rallyExc').addEventListener('click', (e)=> {
          document.querySelector('.rallyExc_container').style.display = 'block';
          document.querySelector('.rallyExcSkills_container').style.display = 'none';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          createModal();
         
      });

      document.getElementById('rallyExcSK').addEventListener('click', (e)=> {
        document.querySelector('.rallyExc_container').style.display = 'none';
        document.querySelector('.rallyExcSkills_container').style.display = 'block';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        createModal();
    });

    createModal();

    var tbody = document.getElementById('table_tbody2');
    var bns = document.getElementsByClassName('rowBtn');
    var hideBns = document.getElementsByClassName('rowBtnHide');
    var buttons = [...hideBns];
    var btns = [...bns];

    var handleClick = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        var rowId = tr[i].id;
       if (buttonClicked === rowId) {
        if (tr[i].classList.contains("hidden")) {      
            tr[i].classList.remove('hidden')
        } 
      } else if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
        } 
      }
    }
     return event; 
    }

    var handleClick2 = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden')
       } 
      }
    }
     return event; 
    }

    btns.forEach(btn => {
      btn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick(buttonClicked, tbody, event)
        }
    });
  
    buttons.forEach(hidebtn => {
      hidebtn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick2(buttonClicked, tbody, event)
        }
    });
   
   
            
       
    } else if (option == 'Rally 4 Dashboard') {
      cont.innerHTML = ``;
      dash = rallyMstTable();
      cont.appendChild(dash)
      // document.getElementById('dashType').style.display = 'none';
      document.querySelector('.rallyMST_container').style.display = 'block';
      document.querySelector('.rallyMSTSkills_container').style.display = 'none';
      document.getElementById('topEl').style.display = 'none';
      document.getElementById('topElement').style.display = 'block';
      handleRallyMastDash(records)

      var rallyMst_button = document.createElement('button');
      rallyExc_button.id = 'rallyMst';
      rallyExc_button.className = 'tabButtonMS';
      rallyExc_button.innerHTML = 'Master Unmastered';  

      var rallyMstSK_button = document.createElement('button');
      rallyExcSK_button.id = 'rallyMstSK';
      rallyExcSK_button.className = 'tabButtonTP2';
      rallyExcSK_button.innerHTML = 'Master Skills Taught';


      document.getElementById('man1Button').appendChild(rallyMst_button);
      document.getElementById('man1Button').appendChild(rallyMstSK_button);

      document.getElementById('rallyMst').addEventListener('click', (e)=> {
          document.querySelector('.rallyMST_container').style.display = 'block';
          document.querySelector('.rallyMSTSkills_container').style.display = 'none';
          document.getElementById('topEl').style.display = 'none';
          document.getElementById('topElement').style.display = 'block';
          createModal();
         
      });

      document.getElementById('rallyMstSK').addEventListener('click', (e)=> {
        document.querySelector('.rallyMST_container').style.display = 'none';
        document.querySelector('.rallyMSTSkills_container').style.display = 'block';
        document.getElementById('topEl').style.display = 'block';
        document.getElementById('topElement').style.display = 'none';
        createModal();
    });



    var tbody = document.getElementById('table_tbody2');
    var bns = document.getElementsByClassName('rowBtn');
    var hideBns = document.getElementsByClassName('rowBtnHide');
    var buttons = [...hideBns];
    var btns = [...bns];

    var handleClick = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        var rowId = tr[i].id;
       if (buttonClicked === rowId) {
        if (tr[i].classList.contains("hidden")) {      
            tr[i].classList.remove('hidden')
        } 
      } else if (buttonClicked === 'bt') {
        if (tr[i].classList == "hiddenRows") {      
          tr[i].classList.add('hidden');
        } 
      }
    }
     return event; 
    }

    var handleClick2 = (buttonClicked, tbody, event) => {
      var tr = tbody.getElementsByTagName("tr");
      for (var i = 0; i < tr.length; i++) {
        if (buttonClicked === 'bt') {
          if (tr[i].classList == "hiddenRows") {      
            tr[i].classList.add('hidden')
       } 
      }
    }
     return event; 
    }

    btns.forEach(btn => {
      btn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick(buttonClicked, tbody, event)
        }
    });
  
    buttons.forEach(hidebtn => {
      hidebtn.onclick = (clickEvent) => {
        const buttonClicked = clickEvent.target.id;
         handleClick2(buttonClicked, tbody, event)
        }
    });
   
   
            
        createModal();
    } 

  // });

      });
    };
  });
})();