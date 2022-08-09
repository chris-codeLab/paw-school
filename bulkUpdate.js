import Swal from 'sweetalert2';
import Choices from 'choices.js';
import { ToastSuccess } from './util-swal';

 const getFildsForUpdate = async (dash) => {
   
    var x;
    switch (dash) {
        case "KP1 Dashboard":
        x = {
             dashTab :'kp1_history',
             fields: {comments: 'Text_area_3', Date: 'Date_4', skills: 'KinderPup1_0', trainer: 'Lookup'},
             multi : 'KinderPup1_0',
             dash_tpTab : 'None',
             multi_tp : 'None'
            }
          break;
        case "KP2 Dashboard":
        x = {
            dashTab: 'kp2sk',
            fields: {comments: 'Text_area_6', Date: 'Date_7', skills: 'KP2MSK_1', trainer: 'Lookup_0'},
            multi : 'KP2MSK_1',
            dash_tpTab : 'None',
            multi_tp : 'None'
        }
          break;
        case "Manners 1 Dashboard":
        x = {
            dashTab:'man1_skillsTaught',
            fields: {comments: 'Text_area_8', Date: 'man1_sk_taught_date', skills: 'MP1MSK_2', trainer: 'Lookup_1'},
            multi :'MP1MSK_2',
            dash_tpTab : 'Table_27',
            fieldsTp: {comments: 'man1_sk_t_comm', Date: 'Date_28', skills: 'MPTPEG', trainer: 'Lookup_2'},
            multi_tp : 'MPTPEG'
        }
          break;
        case "Manners 2 Dashboard":
        x = {
            dashTab: 'Table_10',
            fields: {comments: 'Text_area_10', Date: 'Date_11', skills: 'MP2MSK_1', trainer: 'Lookup_3'},
            multi :'MP2MSK_1',  
            dash_tpTab : 'Table_26', 
            fieldsTp: {comments: 'Text_area_31', Date: 'Date_27', skills: 'MP2TPEG_0', trainer: 'Lookup_4'},
            multi_tp: 'MP2TPEG_0'  
        }
          break;
        case "Manners 3 Dashboard":
        x = {
            dashTab : 'Table_28',
            fields: {comments: 'Text_area_35', Date: 'Date_29', skills: 'M3UMSK_0', trainer: 'Lookup_5'},
            multi: 'M3UMSK_0',
            dash_tpTab : 'None',
            multi_tp : 'None'
        }
          break;
        case "Manners 4 Dashboard":
            x = {
                dashTab : 'Table_12',
                fields: {comments: 'Text_area_12', Date: 'Date_13', skills: "M4MSK_1", trainer: 'Lookup_6'},
                multi: 'M4MSK_1',
                dash_tpTab : 'Table_29',
                fieldsTp: {comments: 'Text_area_37', Date: 'Date_30', skills: 'M4TPEG_0', trainer: 'Lookup_7'},
                multi_tp : 'M4TPEG_0'
            }
            break;
        case "PuppyPE  Dashboard":
            x = {
                dashTab : 'Table_14',
                fields: {comments: 'Text_area_14', Date: 'Date_15', skills: 'PPEMSK_1', trainer: 'Lookup_8'},
                multi: 'PPEMSK_1',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
            break;
        case "Agility 1 Dashboard":
            x = {
                dashTab : 'Table_16',
                fields: {comments: 'Text_area_16', Date: 'Date_17', skills: 'AMSK_1', trainer: 'Lookup_9'},
                multi: 'AMSK_1',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
            break;
        case "Agility 2 Dashboard":
            x = {
                dashTab : 'Table_18',
                fields: {comments: 'Text_area_18', Date: 'Date_19', courses: 'A2Course', skills: 'A2MSK_1', trainer: 'Lookup_10'},
                multi: 'A2MSK_1',
                dash_tpTab : 'A2_NT',
                multi_tp : 'A2Course'
            }
            break;
        case "Agility 3 Dashboard":
            x = {
                dashTab : 'ag3Table',
                fields: {comments: 'Text_area', Date: 'Date', courses: 'A3Course', skills: 'A3MSK_1', trainer: 'Lookup_11'},
                multi: 'A3MSK_1',
                dash_tpTab : 'A3_NT',
                multi_tp : 'A3Course'
            }
        break;
        case "Agility 4 Dashboard":
            x = {
                dashTab : 'ag4Table',
                fields: {comments: 'Text_area_4', Date: 'Date_0', courses: 'A4Course', skills: 'A4MSK', trainer: 'Lookup_17'},
                multi: 'A4MSK',
                dash_tpTab : 'A4_NT',
                multi_tp : 'A4Course'
            }
        break;
        case "Tricks Dashboard":
            x = {
                dashTab : 'Table_3',
                fields: {comments: 'Text_area_1', Date: 'Date_1', skills: 'TMSK_0', trainer: 'Lookup_12'},
                multi: 'TMSK_0',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
        break;
        case "Rally 1 Dashboard":
            x = {
                dashTab : 'rallyNovSK',
                fields: {comments: 'rallyNovComs', Date: 'rallyNovDateTaught', skills: 'RNSK_1', trainer: 'Lookup_13'},
                multi: 'RNSK_1',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
        break;
        case "Rally 2 Dashboard":
            x = {
                dashTab : 'rallyAdvTab',
                fields: {comments: 'Text_area_22', Date: 'Date_22', skills: 'RADSK_1', trainer: 'Lookup_14'},
                multi: 'RADSK_1',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
        break;
        case "Rally 3 Dashboard":
            x = {
                dashTab : 'exTab',
                fields: {comments: 'Text_area_24', Date: 'Date_24', skills: 'REXSK_1', trainer: 'Lookup_15'},
                multi: 'REXSK_1',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
        break;
        case "Rally 4 Dashboard":
            x = {
                dashTab : 'mastTab',
                fields: {comments: 'Text_area_26', Date: 'Date_26', skills: 'RMSK_1', trainer: 'Lookup_16'},
                multi: 'RMSK_1',
                dash_tpTab : 'None',
                multi_tp : 'None'
            }
        break;
        default:
          console.log(dash + " is not a valid dashboard");
          break;
      }
return x;
}

let headerCoursesHTML = `
<thead class="subtable-header-gaia">
                <tr>
                    <th class="subtable-label-gaia subtable-label-multiple_select-gaia" style="width: 305px;">
                        <span class="subtable-label-inner-gaia" style="min-width: 305px;">Skills Taught</span>
                </th>
                    <th class="subtable-label-gaia subtable-label-date-gaia" style="width: 179px;">
                        <span class="subtable-label-inner-gaia" style="min-width: 179px;">Date Taught</span>
                </th>
                <th class="subtable-label-gaia subtable-label-single_line_text-gaia" style="width: 246px;">
                        <span class="subtable-label-inner-gaia" style="min-width: 246px;">Courses</span>
                </th>
                    <th class="subtable-label-gaia subtable-label-multiple_line_text-gaia" style="width: 315px;">
                        <span class="subtable-label-inner-gaia" style="min-width: 315px;">Comments</span>
                </th>
                    <th class="subtable-label-gaia subtable-label-single_line_text-gaia" style="width: 246px;">
                        <span class="subtable-label-inner-gaia" style="min-width: 246px;">Trainer</span>
                </th>
                    <th class="subtable-operation-gaia">
                        <span style="width: 38px;"></span>
                </th>
                </tr>
                </thead>`;

let headerHTML = `
                <thead class="subtable-header-gaia">
                                <tr>
                                    <th class="subtable-label-gaia subtable-label-multiple_select-gaia" style="width: 305px;">
                                        <span class="subtable-label-inner-gaia" style="min-width: 305px;">Skills Taught</span>
                                </th>
                                    <th class="subtable-label-gaia subtable-label-date-gaia" style="width: 179px;">
                                        <span class="subtable-label-inner-gaia" style="min-width: 179px;">Date Taught</span>
                                </th>   
                                    <th class="subtable-label-gaia subtable-label-single_line_text-gaia" style="width: 246px;">
                                        <span class="subtable-label-inner-gaia" style="min-width: 246px;">Trainer</span>
                                </th>
                                    <th class="subtable-operation-gaia">
                                        <span style="width: 38px;"></span>
                                </th>
                                </tr>
                                </thead>`

const didOpen = () => {
    const el1 = document.querySelector('#skillSet-1');
        const choices = new Choices(el1, {
            removeItemButton: true
          });
          console.log(choices);
     const el2 = document.querySelector('#skillSet-2');
        const choices2 = new Choices(el2, {
            removeItemButton: true
            });
    const el3 = document.querySelector('#c_option');
        const choices3 = new Choices(el3, {
                removeItemButton: true
            });
    const el4 = document.querySelector('#trainers');
        const choices4 = new Choices(el4, {
                    removeItemButton: true
                });
    const el5 = document.querySelector('#trainersTP');
        const choices5 = new Choices(el5, {
                 removeItemButton: true
             });
    };

 export const handleBulkUpdates = async (dash, mbClass, updates) => {
    let recs = [];
  
  let fieldSet = await getFildsForUpdate(dash);
  let fields = fieldSet.fields;
  let coms = fields.comments;
  let date = fields.Date;
  let skills = fields.skills;
    let trainer = fields.trainer;
  let clss = mbClass.join(', ');
    let skillTab = fieldSet.dashTab;
    let multi = fieldSet.multi;
    let dash_tpTab = fieldSet.dash_tpTab;
    
    let multi_tp = fieldSet.multi_tp;
   console.log(fields);
    var body = {
        'app': kintone.app.getId()
      };
      
      kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, async (resp) => {
        // success
        console.log(resp);
        let prps = resp.properties;
        let tabFields = prps[skillTab].fields;
        console.log('tabFields: ', tabFields);
        let skills = [];
        let skillsTP = [];
        let courses = [];
        let tab1Fields = [];
        let tab2Fields = [];
        let multiOptions = tabFields[multi].options;
        console.log('multiOptions', multiOptions);
       
        for (const key in tabFields) {
            tab1Fields.push(tabFields[key]);
        }
        let skTabFields;
         if( dash_tpTab !== 'None' && (dash !== 'Agility 2 Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard')) {
            for(const key in prps[dash_tpTab].fields) {
                skTabFields=  prps[dash_tpTab].fields[key];
                tab2Fields.push(skTabFields);
            }
         } 
        let multiOptionsTP = dash_tpTab !== 'None' && (dash !== 'Agility 2  Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard') ? prps[dash_tpTab].fields[multi_tp].options : dash_tpTab !== 'None' && ( dash == 'Agility 2' || dash == 'Agility 3' || dash == 'Agility 4' ) ? prps[dash_tpTab].options : 'NA';
        let hd = dash_tpTab !== 'None' && ( dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard' ) ? headerCoursesHTML : headerHTML;
        let disp = dash_tpTab == 'None' ||  dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard'  ? `none` : `block`;
        let disp2 = dash_tpTab !== 'None' &&  (dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard')  ? `block` : `none`;
        let multiHTML = ``;
        let courseHTML = ``;
        let multiHTMLTP = ``;
        for (const key in multiOptions) {
            skills.push(multiOptions[key]);
        }
        if(multiOptionsTP !== 'NA' && (dash == 'Manners 1 Dashboard' || dash == 'Manners 2 Dashboard' || dash == 'Manners 4 Dashboard')) {
            for (const key in multiOptionsTP) {
                skillsTP.push(multiOptionsTP[key]);
            }
        } 
        skills.forEach((option, index) => {
            let i = index;
            let opt =`<option value="${option.label}">${option.label}</option>`
            multiHTML += opt;
        });
        if(multiOptionsTP !== 'NA' && (dash == 'Manners 1 Dashboard' || dash == 'Manners 2 Dashboard' || dash == 'Manners 4 Dashboard')) { 
        skillsTP.forEach((option, index) => {
            let i = index;
            let opt =`<option value="${option.label}">${option.label}</option>`
            multiHTMLTP += opt;
        });
    }
        setTimeout(didOpen, 400);
        return Swal.fire({
            input: 'info',
            width: '960px',
            html: `
                <span id="${dash}" style="font-size: 16px;"><b>Update All Class Participants</b></span>
                    <span id="class" style="font-size: 15px;">Class: ${clss}</span>
                    <div class="subtable-row-gaia subtable-row-skills" style="">
                        <div class="subtable-row-label-gaia subtable-row-label">
                            <span class="subtable-row-label-text-gaia">${dash}:  Skills Taught Table</span></div>
                                <table class="subtable-gaia subtable edit-subtable-gaia">
                                    ${hd}
                                    <tbody>
                                        <tr>
                                            <td style="max-width: 305px;">
                                                <div class="control-gaia control-multiple_select-field-gaia">
                                                    <select name="skillSet-1" id="skillSet-1" multiple="multiple">
                                                            ${multiHTML}
                                                </select>
                                            </div>
                                        </td>
                                    <td>
                                        <div class="control-gaia control-date-field-gaia">
                                            <div class="input-date-cybozu">
                                                <input type="date" id="date-1" class="input-date-text-cybozu">
                                            </div>
                                        </div>
                                    </td>
                               <td style="display: ${disp2} !important">
                                 <select id="c_option">
                                    <option value="Course A">Course A</option> 
                                    <option value="Course B">Course B</option> 
                                    <option value="Course C">Course C</option> 
                                    <option value="Course D">Course D</option> 
                                    <option value="Course E">Course E</option> 
                                    <option value="Course F">Course F</option> 
                                    <option value="Course G">Course G</option> 
                                    <option value="Course H">Course H</option> 
                                    <option value="Course I">Course I</option> 
                                    <option value="Course J">Course J</option> 
                                    <option value="Course K">Course K</option> 
                                    <option value="Course L">Course L</option> 
                                    <option value="Course M">Course M</option> 
                                    <option value="Course N">Course N</option> 
                                    <option value="Custom (See Comments)">Custom (See Comments)</option>
                                 </select>
                            <td>
                                <select id="trainers" style="width: 100%">
                                    <option value="">Trainer</option>
                                    <option value="Jess Frigo">Jess Frigo</option>
                                            <option value="Erin Lukacovic">Erin Lukacovic</option>
                                            <option value="Bri Barkley">Bri Barkley</option>
                                            <option value="Megan Knepell">Megan Knepell</option>
                                            <option value="Tina Rose">Tina Rose</option>
                                            <option value="Taylor Hardgrave">Taylor Hardgrave</option>
                                            <option value="Marny Knowles">Marny Knowles</option>
                                            <option value="Nici Stephens">Nici Stephens</option>
                                            <option value="Alex Edberg">Alex Edberg</option>
                                            <option value="Kathy Thorpe">Kathy Thorpe</option>
                                        <option value="Colleen Tekamp">Colleen Tekamp</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <hr>
                        <div class="subtable-row-gaia subtable-row-talkingPoints" style="display:${disp} !important">
                                <div class="subtable-row-label-gaia subtable-row-label">
                                    <span class="subtable-row-label-text-gaia">${dash}:  Talking Points, Exercises, Games</span></div>
                                        <table class="subtable-gaia subtable edit-subtable-gaia">
                                            <thead class="subtable-header-gaia">
                                                <tr>
                                                    <th class="subtable-label-gaia subtable-label-multiple_select-gaia" style="width: 305px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 305px;">Talking Points</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-date-gaia" style="width: 179px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 179px;">Date Taught</span>
                                                </th>

                                                    <th class="subtable-label-gaia subtable-label-single_line_text-gaia" style="width: 246px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 246px;">Trainer</span>
                                                </th>
                                                    <th class="subtable-operation-gaia">
                                                        <span style="width: 38px;"></span>
                                                </th>
                                            </tr>
                                        </thead>
                                                <tbody>
                                                    <tr>
                                                         <td style="max-width: 305px;">
                                                            <div class="control-gaia control-multiple_select-field-gaia">
                                                                <select name="skillSet-2" id="skillSet-2" multiple="multiple">
                                                                    ${multiHTMLTP}
                                                                </select>
                                                            </div>
                                                        </td>
                                                            <td>
                                                                <div class="control-gaia control-date-field-gaia">
                                                                        <div class="input-date-cybozu">
                                                                            <input type="date" id="date-2" class="input-date-text-cybozu">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                    <td>
                                                        <select id="trainersTP" style="width: 100%">
                                                            <option value="">Trainer</option>
                                                            <option value="Jess Frigo">Jess Frigo</option>
                                                            <option value="Erin Lukacovic">Erin Lukacovic</option>
                                                            <option value="Bri Barkley">Bri Barkley</option>
                                                            <option value="Megan Knepell">Megan Knepell</option>
                                                            <option value="Tina Rose">Tina Rose</option>
                                                            <option value="Taylor Hardgrave">Taylor Hardgrave</option>
                                                            <option value="Marny Knowles">Marny Knowles</option>
                                                            <option value="Nici Stephens">Nici Stephens</option>
                                                            <option value="Alex Edberg">Alex Edberg</option>
                                                            <option value="Kathy Thorpe">Kathy Thorpe</option>
                                                            <option value="Colleen Tekamp">Colleen Tekamp</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
              `,
      
        showCancelButton: false,
        cancelButtonColor: '#a37777',
        confirmButtonText: 'Update Class',
        confirmButtonColor: '#5eb06b',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            //SKILLS TAUGHT
            console.log('dash: ' + dash);
            var sk1Select = document.getElementById('skillSet-1');
            var sk1Selected = [...sk1Select.options]
                            .filter(option => option.selected)
                            .map(option => option.value)
            console.log('sk1Selected', sk1Selected);
            let dt =  document.getElementById('date-1').value;
            let trnr = document.getElementById('trainers').value;
        
                if(dash !== 'Manners 1 Dashboard' && dash !== 'Manners 2 Dashboard' && dash !== 'Manners 4 Dashboard' && dash !== 'Agility 2 Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard' ){

                    updates.forEach(rec => {
                        console.log('rec', rec);
                        let recId = rec.$id.value;
                        const lastName = rec.clientLastName.value;
                        const dogName = rec['dogName'].value + ' ' + lastName;
                        let skillTaught = rec[skillTab].value;
                        let tab = [];
                        console.log('skillTaught', skillTaught);
                        if(skillTaught.length > 0){
                            skillTaught.forEach(r => {
                                let row = r;
                               tab.push(row);
                            });
                        }
                        var addData = {};
                            addData.value = {};
                        addData.value[`${fields.Date}`] = {
                            "type": "DATE",
                            "value": dt
                        };
                        addData.value[`${fields.skills}`] = {
                            "type": "MULTI_SELECT",
                            "value": sk1Selected
                        };
                        addData.value[`${fields.trainer}`] = {
                            "type": "SINGLE_LINE_TEXT",
                            "value": trnr
                        };
                        addData.value[`${fields.comments}`] = {
                            "type": "MULTI_LINE_TEXT",
                            "value": ""
                        };
                     skillTaught.push(addData);
                   
                        let body = {
                            app: 2,
                            id: recId,
                            record: {
                                [skillTab]: {
                                    'value': skillTaught
                                }
                            }
                        };

                        console.log('body', body);
                 kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body, function(resp) {
                    // success
                    console.log(resp);
               
                    }, function(error) {
                    // error
                    console.log(error);
                    });
                   })
                   ToastSuccess.fire({
                    width: '300px',
                    icon: 'success',
                    title: '🐕‍🦺 Class Updated!'
                });
                } else if(dash == 'Manners 1 Dashboard' || dash == 'Manners 2 Dashboard' || dash == 'Manners 4 Dashboard') {
                    var sk2Select = document.getElementById('skillSet-2');
                    var sk2Selected = [...sk2Select.options]
                                    .filter(option => option.selected)
                                    .map(option => option.value)
                    console.log('sk2Selected', sk2Selected);
                    let dt2 =  document.getElementById('date-2').value;
                    let trnr2 = document.getElementById('trainersTP').value;
                    if(sk2Selected.length > 0) {
                        updates.forEach(rec => {
                            console.log('rec', rec);
                            let recId = rec.$id.value;
                            const lastName = rec.clientLastName.value;
                            const dogName = rec['dogName'].value + ' ' + lastName;
                            let skillTaught = rec[skillTab].value;
                            let talkPoints = rec[dash_tpTab].value;
                            let tab = [];
                            console.log('skillTaught', skillTaught);
                        
                            var addData = {};
                                addData.value = {};
                            addData.value[`${fields.Date}`] = {
                                "type": "DATE",
                                "value": dt
                            };
                            addData.value[`${fields.skills}`] = {
                                "type": "MULTI_SELECT",
                                "value": sk1Selected
                            };
                            addData.value[`${fields.trainer}`] = {
                                "type": "SINGLE_LINE_TEXT",
                                "value": trnr
                            };
                            addData.value[`${fields.comments}`] = {
                                "type": "MULTI_LINE_TEXT",
                                "value": ""
                            };
                         skillTaught.push(addData);

                         var addData2 = {};
                         addData2.value = {};
                                addData2.value[`${fieldSet.fieldsTp.Date}`] = {
                                    "type": "DATE",
                                    "value": dt2
                                };
                                addData2.value[`${fieldSet.fieldsTp.skills}`] = {
                                    "type": "MULTI_SELECT",
                                    "value": sk2Selected
                                };
                                addData2.value[`${fieldSet.fieldsTp.trainer}`] = {
                                    "type": "SINGLE_LINE_TEXT",
                                    "value": trnr2
                                };
                                addData2.value[`${fieldSet.fieldsTp.comments}`] = {
                                    "type": "MULTI_LINE_TEXT",
                                    "value": ""
                                };
                                talkPoints.push(addData2);
                console.log('talkPoints', talkPoints);
                       
                            let body = {
                                app: 2,
                                id: recId,
                                record: {
                                    [skillTab]: {
                                        'value': skillTaught
                                    },
                                    [dash_tpTab]: {
                                        'value': talkPoints
                                    }
                                }
                            };
    
                            console.log('body', body);
                     kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body, function(resp) {
                        // success
                        console.log(resp);
                   
                        }, function(error) {
                        // error
                        console.log(error);
                        });
                       })
                       ToastSuccess.fire({
                        width: '300px',
                        icon: 'success',
                        title: '🐕‍🦺 Class Updated!'
                    });
                    } else if(sk2Selected.length > 0 && sk1Selected <= 0) {
                        updates.forEach(rec => {
                            console.log('rec', rec);
                            let recId = rec.$id.value;
                            const lastName = rec.clientLastName.value;
                            const dogName = rec['dogName'].value + ' ' + lastName;
                            let skillTaught = rec[skillTab].value;
                            let talkPoints = rec[dash_tpTab].value;
                            let tab = [];
                            console.log('talkPoints', talkPoints);
                        

                         var addData2 = {};
                         addData2.value = {};
                                addData.value[`${fieldSet.fieldsTp.Date}`] = {
                                    "type": "DATE",
                                    "value": dt2
                                };
                                addData2.value[`${fieldSet.fieldsTp.skills}`] = {
                                    "type": "MULTI_SELECT",
                                    "value": sk2Selected
                                };
                                addData2.value[`${fieldSet.fieldsTp.trainer}`] = {
                                    "type": "SINGLE_LINE_TEXT",
                                    "value": trnr2
                                };
                                addData2.value[`${fieldSet.fieldsTp.comments}`] = {
                                    "type": "MULTI_LINE_TEXT",
                                    "value": ""
                                };
                                talkPoints.push(addData2);
                
                       
                            let body = {
                                app: 2,
                                id: recId,
                                record: {
                                    [dash_tpTab]: {
                                        'value': talkPoints
                                    }
                                }
                            };
    
                            console.log('body', body);
                     kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body, function(resp) {
                        // success
                        console.log(resp);
                   
                        }, function(error) {
                        // error
                        console.log(error);
                        });
                       })
                       ToastSuccess.fire({
                        width: '300px',
                        icon: 'success',
                        title: '🐕‍🦺 Class Updated!'
                    });
                    } else if(sk2Selected.length <= 0 && sk1Selected > 0) {
                        updates.forEach(rec => {
                            console.log('rec', rec);
                            let recId = rec.$id.value;
                            const lastName = rec.clientLastName.value;
                            const dogName = rec['dogName'].value + ' ' + lastName;
                            let skillTaught = rec[skillTab].value;
                            let talkPoints = rec[dash_tpTab].value;
                            let tab = [];
                            console.log('skillTaught', skillTaught);
                        
                            var addData = {};
                                addData.value = {};
                            addData.value[`${fields.Date}`] = {
                                "type": "DATE",
                                "value": dt
                            };
                            addData.value[`${fields.skills}`] = {
                                "type": "MULTI_SELECT",
                                "value": sk1Selected
                            };
                            addData.value[`${fields.trainer}`] = {
                                "type": "SINGLE_LINE_TEXT",
                                "value": trnr
                            };
                            addData.value[`${fields.comments}`] = {
                                "type": "MULTI_LINE_TEXT",
                                "value": ""
                            };
                         skillTaught.push(addData);

                         var addData2 = {};
                         addData2.value = {};
                                addData.value[`${fieldSet.fieldsTp.Date}`] = {
                                    "type": "DATE",
                                    "value": dt2
                                };
                                addData2.value[`${fieldSet.fieldsTp.skills}`] = {
                                    "type": "MULTI_SELECT",
                                    "value": sk2Selected
                                };
                                addData2.value[`${fieldSet.fieldsTp.trainer}`] = {
                                    "type": "SINGLE_LINE_TEXT",
                                    "value": trnr2
                                };
                                addData2.value[`${fieldSet.fieldsTp.comments}`] = {
                                    "type": "MULTI_LINE_TEXT",
                                    "value": ""
                                };
                                talkPoints.push(addData2);
                
                       
                            let body = {
                                app: 2,
                                id: recId,
                                record: {
                                    [skillTab]: {
                                        'value': skillTaught
                                    }
                                }
                            };
    
                            console.log('body', body);
                     kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body, function(resp) {
                        // success
                        console.log(resp);
                   
                        }, function(error) {
                        // error
                        console.log(error);
                        });
                       })
                       ToastSuccess.fire({
                        width: '300px',
                        icon: 'success',
                        title: '🐕‍🦺 Class Updated!'
                    });
                    }
                } else if (dash === 'Agility 2 Dashboard' || dash === 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard') {
                    let crsCode = dash == 'Agility 2 Dashboard' ? "A2Course" : dash == 'Agility 3 Dashboard' ? "A3Course" : "A4Course";
                    let crs = document.getElementById('c_option').value === '' || document.getElementById('c_option').value == undefined ? '' : document.getElementById('c_option').value;
                    updates.forEach(rec => {
                        console.log('rec', rec);
                        let recId = rec.$id.value;
                        const lastName = rec.clientLastName.value;
                        const dogName = rec['dogName'].value + ' ' + lastName;
                        let skillTaught = rec[skillTab].value;
                        let tab = [];
                        console.log('skillTaught', skillTaught);
                        var addData = {};
                            addData.value = {};
                        addData.value[`${crsCode}`] = {
                            "type": "DROP_DOWN",
                            "value": crs
                            };
                        addData.value[`${fields.Date}`] = {
                            "type": "DATE",
                            "value": dt
                        };
                        addData.value[`${fields.skills}`] = {
                            "type": "MULTI_SELECT",
                            "value": sk1Selected
                        };
                        addData.value[`${fields.trainer}`] = {
                            "type": "SINGLE_LINE_TEXT",
                            "value": trnr
                        };
                        addData.value[`${fields.comments}`] = {
                            "type": "MULTI_LINE_TEXT",
                            "value": ""
                        };
                     skillTaught.push(addData);
                   
                        let body = {
                            app: 2,
                            id: recId,
                            record: {
                                [skillTab]: {
                                    'value': skillTaught
                                }
                            }
                        };

                        console.log('body', body);
                 kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body, function(resp) {
                    // success
                    console.log(resp);
               
                    }, function(error) {
                    // error
                    console.log(error);
                    });
                   })
                   ToastSuccess.fire({
                    width: '300px',
                    icon: 'success',
                    title: '🐕‍🦺 Class Updated!'
                });
                }
            }
        
        
    })
  });
};

export const handleAgilityBulkUpdates = async (dash, mbClass, updates) => {
    let recs = [];
  
  let fieldSet = await getFildsForUpdate(dash);
  let fields = fieldSet.fields;
  let coms = fields.comments;
  let date = fields.Date;
  let skills = fields.skills;
    let trainer = fields.trainer;
  let clss = mbClass.join(', ');
    let skillTab = fieldSet.dashTab;
    let multi = fieldSet.multi;
    let dash_tpTab = fieldSet.dash_tpTab;
    let multi_tp = fieldSet.multi_tp;
   console.log(fields);
    var body = {
        'app': kintone.app.getId()
      };
      
      kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, async (resp) => {
        // success
        console.log(resp);
        let prps = resp.properties;
        let skills = [];
        let skillsTP = [];
        let courses = [];
        let tab1Fields = [];
        let tab2Fields = [];
        let multiOptions = prps[skillTab].fields[multi].options;
        console.log('multiOptions', multiOptions);
        let tabFields = prps[skillTab].fields;
        for (const key in tabFields) {
            tab1Fields.push(tabFields[key]);
        }
        let skTabFields;
         if( dash_tpTab !== 'None' && (dash !== 'Agility 2 Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard')) {
            for(const key in prps[dash_tpTab].fields) {
                skTabFields=  prps[dash_tpTab].fields[key];
                tab2Fields.push(skTabFields);
            }
         } 
        let multiOptionsTP = dash_tpTab !== 'None' && (dash !== 'Agility 2  Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard') ? prps[dash_tpTab].fields[multi_tp].options : dash_tpTab !== 'None' && ( dash == 'Agility 2' || dash == 'Agility 3' || dash == 'Agility 4' ) ? prps[dash_tpTab].options : 'NA';
        let hd = dash_tpTab !== 'None' && ( dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard' ) ? headerCoursesHTML : headerHTML;
        let disp = dash_tpTab == 'None' ||  dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard'  ? `none` : `block`;
        let disp2 = dash_tpTab !== 'None' ||  dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard'  ? `block` : `none`;
        let multiHTML = ``;
        let courseHTML = ``;
        let multiHTMLTP = ``;
        for (const key in multiOptions) {
            skills.push(multiOptions[key]);
        }
        if(multiOptionsTP !== 'NA' && (dash == 'Manners 1 Dashboard' || dash == 'Manners 2 Dashboard' || dash == 'Manners 4 Dashboard')) {
            for (const key in multiOptionsTP) {
                skillsTP.push(multiOptionsTP[key]);
            }
        } else if (multiOptionsTP !== 'NA' && (dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard')) {
            for (const key in multiOptionsTP) {
                courses.push(multiOptionsTP[key]);
            }
        } 
        skills.forEach((option, index) => {
            let i = index;
            let opt =`<option value="${option.label}">${option.label}</option>`
            multiHTML += opt;
        });
        skillsTP.forEach((option, index) => {
            let i = index;
            let opt =`<option value="${option.label}">${option.label}</option>`
            multiHTMLTP += opt;
        });
        courses.forEach(option => {
            let opt =`<option value="${option.label}">${option.label}</option>`
            courseHTML += opt;
        });
        setTimeout(didOpen, 400);
        return Swal.fire({
            input: 'info',
            width: '1160px',
            html: `
                <span id="${dash}" style="font-size: 16px;"><b>Update All Class Participants</b></span>
                    <span id="class" style="font-size: 15px;">Class: ${clss}</span>
                    <div class="subtable-row-gaia subtable-row-skills" style="">
                        <div class="subtable-row-label-gaia subtable-row-label">
                            <span class="subtable-row-label-text-gaia">${dash}:  Skills Taught Table</span></div>
                                <table class="subtable-gaia subtable edit-subtable-gaia">
                                    ${hd}
                                    <tbody>
                                        <tr>
                                            <td style="max-width: 305px;">
                                                <div class="control-gaia control-multiple_select-field-gaia">
                                                    <select name="skillSet-1" id="skillSet-1" multiple="multiple">
                                                            ${multiHTML}
                                                </select>
                                            </div>
                                        </td>
                                    <td>
                                        <div class="control-gaia control-date-field-gaia">
                                            <div class="input-date-cybozu">
                                                <input type="date" id="date-1" class="input-date-text-cybozu">
                                            </div>
                                        </div>
                                    </td>
                               <td style="display: ${disp2} !important">
                                                <div class="kintoneplugin-select-outer">
                                                    <div id="options" placeholder="Courses" class="kintoneplugin-select">
                                                        <select id="c_option">
                                                            ${courseHTML}
                                                        </select>
                                                    </div>  
                                                </div> 
                                            <td>
                                                <div class="control-gaia control-multiple_line_text-field-gaia">
                                                    <textarea  class="textarea-cybozu" style="box-sizing: border-box; width: 299px; height: 84px;"> 
                                                </textarea>
                                            <div class="textarea-resize-cybozu"  id="cm-1" style="top: 68px; left: 283px;">
                                        </div>
                                    </div>
                                </td>
                            <td>
                                <select id="trainers" style="width: 100%">
                                    <option value="">Trainer</option>
                                    <option value="Jess Frigo">Jess Frigo</option>
                                            <option value="Erin Lukacovic">Erin Lukacovic</option>
                                            <option value="Bri Barkley">Bri Barkley</option>
                                            <option value="Megan Knepell">Megan Knepell</option>
                                            <option value="Tina Rose">Tina Rose</option>
                                            <option value="Taylor Hardgrave">Taylor Hardgrave</option>
                                            <option value="Marny Knowles">Marny Knowles</option>
                                            <option value="Nici Stephens">Nici Stephens</option>
                                            <option value="Alex Edberg">Alex Edberg</option>
                                            <option value="Kathy Thorpe">Kathy Thorpe</option>
                                        <option value="Colleen Tekamp">Colleen Tekamp</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <hr>
                        <div class="subtable-row-gaia subtable-row-talkingPoints" style="display:${disp} !important">
                                <div class="subtable-row-label-gaia subtable-row-label">
                                    <span class="subtable-row-label-text-gaia">${dash}:  Talking Points, Exercises, Games</span></div>
                                        <table class="subtable-gaia subtable edit-subtable-gaia">
                                            <thead class="subtable-header-gaia">
                                                <tr>
                                                    <th class="subtable-label-gaia subtable-label-multiple_select-gaia" style="width: 305px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 305px;">Talking Points</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-date-gaia" style="width: 179px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 179px;">Date Taught</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-multiple_line_text-gaia" style="width: 315px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 315px;">Comments</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-single_line_text-gaia" style="width: 246px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 246px;">Trainer</span>
                                                </th>
                                                    <th class="subtable-operation-gaia">
                                                        <span style="width: 38px;"></span>
                                                </th>
                                            </tr>
                                        </thead>
                                                <tbody>
                                                    <tr>
                                                         <td style="max-width: 305px;">
                                                            <div class="control-gaia control-multiple_select-field-gaia">
                                                                <select name="skillSet-2" id="skillSet-2" multiple="multiple">
                                                                    ${multiHTMLTP}
                                                                </select>
                                                            </div>
                                                        </td>
                                                            <td>
                                                                <div class="control-gaia control-date-field-gaia">
                                                                        <div class="input-date-cybozu">
                                                                            <input type="date" id="date-2" class="input-date-text-cybozu">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        <td>
                                                            <div class="control-gaia control-multiple_line_text-field-gaia">
                                                                <textarea  class="textarea-cybozu" id="cm-2" style="box-sizing: border-box; width: 299px; height: 84px;"> 
                                                            </textarea>
                                                        <div class="textarea-resize-cybozu" style="top: 68px; left: 283px;">
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div id="trainer-options" placeholder="Courses" class="kintoneplugin-select">
                                                             <select id="trainers2">
                                                                <option value="">Trainer</option>
                                                                <option value="Jess Frigo">Jess Frigo</option>
                                                                <option value="Erin Lukacovic">Erin Lukacovic</option>
                                                                <option value="Bri Barkley">Bri Barkley</option>
                                                                <option value="Megan Knepell">Megan Knepell</option>
                                                                <option value="Tina Rose">Tina Rose</option>
                                                                <option value="Taylor Hardgrave">Taylor Hardgrave</option>
                                                                <option value="Marny Knowles">Marny Knowles</option>
                                                                <option value="Nici Stephens">Nici Stephens</option>
                                                                <option value="Alex Edberg">Alex Edberg</option>
                                                                <option value="Kathy Thorpe">Kathy Thorpe</option>
                                                                <option value="Colleen Tekamp">Colleen Tekamp</option>
                                                            </select>
                                                        </div>  
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
              `,
      
        showCancelButton: true,
        cancelButtonColor: '#a37777',
        confirmButtonText: 'Update Class',
        confirmButtonColor: '#5eb06b',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            //SKILLS TAUGHT
            console.log('dash: ' + dash);
            var sk1Select = document.getElementById('skillSet-1');
            var sk1Selected = [...sk1Select.options]
                            .filter(option => option.selected)
                            .map(option => option.value)
            console.log('sk1Selected', sk1Selected);
            let dt =  document.getElementById('date-1').value;
            let cmt = document.getElementById('cm-1').value;
            let trnr = document.getElementById('trainers').value;
            let crs;
            if(dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard')  {
             crs = document.getElementById('c_options');
            let crsSelected = [...crs.options]
                            .filter(option => option.selected)
                            .map(option => option.value)
            }
        if(skillsTP.length > 0) {
            var sk2Select = document.getElementById('skillSet-2');
            var sk2Selected = [...sk2Select.options]
                    .filter(option => option.selected)
                    .map(option => option.value)
                console.log(sk2Selected);
            let dt2 =  document.getElementById('date-2').value;
            let cmt2 = document.getElementById('cm-2').value;
            let trnr2 = document.getElementById('trainers2').value;
        }
                if(sk1Selected.length > 0){
                    updates.forEach(rec => {
                        console.log('rec', rec);
                        let recId = rec.$id.value;
                        let skillTaught = rec[skillTab].value;
                        let tab = [];
                        console.log('skillTaught', skillTaught);
                        if(skillTaught.length > 0){
                            skillTaught.forEach(row => {
                               tab.push(row);
                            });
                        }
                    if(dash !== 'Agility 2 Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard'){
                        let x = {
                            [fields.comments] :{
                                'value': cmt
                            },
                            [fields.Date]:{
                                'value': dt
                            },
                            [fields.trainer]:{
                                'value': trnr
                            },
                            [fields.skills] :{
                                'value': sk1Selected
                            }
                        };
                        tab.push(x);
                   
                        let body = {
                            app: 2,
                            id: recId,
                            record: {
                                [skillTab]: {
                                    'value': tab
                                }
                            }
                        };
                        console.log('body', body);
                    }  else {
                        let x = {
                            [fields.comments] :{
                                'value': cmt
                            },
                            [fields.Date]:{
                                'value': dt
                            },
                            [fields.courses]:{
                                'value': crs
                            },
                            [fields.trainer]:{
                                'value': trnr
                            },
                            [fields.skills] :{
                                'value': sk1Selected
                            }
                        };
                        tab.push(x);
                   
                        let body = {
                            app: 2,
                            id: recId,
                            record: {
                                [skillTab]: {
                                    'value': tab
                                }
                            }
                        };
                    }
                    console.log('body', body);
                   })
                }
            }
        
        
    })
  });
};

export const handleMannerBulkUpdates = async (dash, mbClass, updates) => {
    let recs = [];
  
  let fieldSet = await getFildsForUpdate(dash);
  let fields = fieldSet.fields;
  let coms = fields.comments;
  let date = fields.Date;
  let skills = fields.skills;
    let trainer = fields.trainer;
  let clss = mbClass.join(', ');
    let skillTab = fieldSet.dashTab;
    let multi = fieldSet.multi;
    let dash_tpTab = fieldSet.dash_tpTab;
    let multi_tp = fieldSet.multi_tp;
   console.log(fields);
    var body = {
        'app': kintone.app.getId()
      };
      
      kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, async (resp) => {
        // success
        console.log(resp);
        let prps = resp.properties;
        let skills = [];
        let skillsTP = [];
        let courses = [];
        let tab1Fields = [];
        let tab2Fields = [];
        let multiOptions = prps[skillTab].fields[multi].options;
        console.log('multiOptions', multiOptions);
        let tabFields = prps[skillTab].fields;
        for (const key in tabFields) {
            tab1Fields.push(tabFields[key]);
        }
        let skTabFields;
         if( dash_tpTab !== 'None' && (dash !== 'Agility 2 Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard')) {
            for(const key in prps[dash_tpTab].fields) {
                skTabFields=  prps[dash_tpTab].fields[key];
                tab2Fields.push(skTabFields);
            }
         } 
        let multiOptionsTP = dash_tpTab !== 'None' && (dash !== 'Agility 2  Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard') ? prps[dash_tpTab].fields[multi_tp].options : dash_tpTab !== 'None' && ( dash == 'Agility 2' || dash == 'Agility 3' || dash == 'Agility 4' ) ? prps[dash_tpTab].options : 'NA';
        let hd = dash_tpTab !== 'None' && ( dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard' ) ? headerCoursesHTML : headerHTML;
        let disp = dash_tpTab == 'None' ||  dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard'  ? `none` : `block`;
        let disp2 = dash_tpTab !== 'None' ||  dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard'  ? `block` : `none`;
        let multiHTML = ``;
        let courseHTML = ``;
        let multiHTMLTP = ``;
        for (const key in multiOptions) {
            skills.push(multiOptions[key]);
        }
        if(multiOptionsTP !== 'NA' && (dash == 'Manners 1 Dashboard' || dash == 'Manners 2 Dashboard' || dash == 'Manners 4 Dashboard')) {
            for (const key in multiOptionsTP) {
                skillsTP.push(multiOptionsTP[key]);
            }
        } else if (multiOptionsTP !== 'NA' && (dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard')) {
            for (const key in multiOptionsTP) {
                courses.push(multiOptionsTP[key]);
            }
        } 
        skills.forEach((option, index) => {
            let i = index;
            let opt =`<option value="${option.label}">${option.label}</option>`
            multiHTML += opt;
        });
        skillsTP.forEach((option, index) => {
            let i = index;
            let opt =`<option value="${option.label}">${option.label}</option>`
            multiHTMLTP += opt;
        });
        courses.forEach(option => {
            let opt =`<option value="${option.label}">${option.label}</option>`
            courseHTML += opt;
        });
        setTimeout(didOpen, 400);
        return Swal.fire({
            input: 'info',
            width: '1160px',
            html: `
                <span id="${dash}" style="font-size: 16px;"><b>Update All Class Participants</b></span>
                    <span id="class" style="font-size: 15px;">Class: ${clss}</span>
                    <div class="subtable-row-gaia subtable-row-skills" style="">
                        <div class="subtable-row-label-gaia subtable-row-label">
                            <span class="subtable-row-label-text-gaia">${dash}:  Skills Taught Table</span></div>
                                <table class="subtable-gaia subtable edit-subtable-gaia">
                                    ${hd}
                                    <tbody>
                                        <tr>
                                            <td style="max-width: 305px;">
                                                <div class="control-gaia control-multiple_select-field-gaia">
                                                    <select name="skillSet-1" id="skillSet-1" multiple="multiple">
                                                            ${multiHTML}
                                                </select>
                                            </div>
                                        </td>
                                    <td>
                                        <div class="control-gaia control-date-field-gaia">
                                            <div class="input-date-cybozu">
                                                <input type="date" id="date-1" class="input-date-text-cybozu">
                                            </div>
                                        </div>
                                    </td>
                               <td style="display: ${disp2} !important">
                                                <div class="kintoneplugin-select-outer">
                                                    <div id="options" placeholder="Courses" class="kintoneplugin-select">
                                                        <select id="c_option">
                                                            ${courseHTML}
                                                        </select>
                                                    </div>  
                                                </div> 
                                            <td>
                                                <div class="control-gaia control-multiple_line_text-field-gaia">
                                                    <textarea  class="textarea-cybozu" style="box-sizing: border-box; width: 299px; height: 84px;"> 
                                                </textarea>
                                            <div class="textarea-resize-cybozu"  id="cm-1" style="top: 68px; left: 283px;">
                                        </div>
                                    </div>
                                </td>
                            <td>
                                <select id="trainers" style="width: 100%">
                                    <option value="">Trainer</option>
                                    <option value="Jess Frigo">Jess Frigo</option>
                                            <option value="Erin Lukacovic">Erin Lukacovic</option>
                                            <option value="Bri Barkley">Bri Barkley</option>
                                            <option value="Megan Knepell">Megan Knepell</option>
                                            <option value="Tina Rose">Tina Rose</option>
                                            <option value="Taylor Hardgrave">Taylor Hardgrave</option>
                                            <option value="Marny Knowles">Marny Knowles</option>
                                            <option value="Nici Stephens">Nici Stephens</option>
                                            <option value="Alex Edberg">Alex Edberg</option>
                                            <option value="Kathy Thorpe">Kathy Thorpe</option>
                                        <option value="Colleen Tekamp">Colleen Tekamp</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <hr>
                        <div class="subtable-row-gaia subtable-row-talkingPoints" style="display:${disp} !important">
                                <div class="subtable-row-label-gaia subtable-row-label">
                                    <span class="subtable-row-label-text-gaia">${dash}:  Talking Points, Exercises, Games</span></div>
                                        <table class="subtable-gaia subtable edit-subtable-gaia">
                                            <thead class="subtable-header-gaia">
                                                <tr>
                                                    <th class="subtable-label-gaia subtable-label-multiple_select-gaia" style="width: 305px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 305px;">Talking Points</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-date-gaia" style="width: 179px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 179px;">Date Taught</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-multiple_line_text-gaia" style="width: 315px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 315px;">Comments</span>
                                                </th>
                                                    <th class="subtable-label-gaia subtable-label-single_line_text-gaia" style="width: 246px;">
                                                        <span class="subtable-label-inner-gaia" style="min-width: 246px;">Trainer</span>
                                                </th>
                                                    <th class="subtable-operation-gaia">
                                                        <span style="width: 38px;"></span>
                                                </th>
                                            </tr>
                                        </thead>
                                                <tbody>
                                                    <tr>
                                                         <td style="max-width: 305px;">
                                                            <div class="control-gaia control-multiple_select-field-gaia">
                                                                <select name="skillSet-2" id="skillSet-2" multiple="multiple">
                                                                    ${multiHTMLTP}
                                                                </select>
                                                            </div>
                                                        </td>
                                                            <td>
                                                                <div class="control-gaia control-date-field-gaia">
                                                                        <div class="input-date-cybozu">
                                                                            <input type="date" id="date-2" class="input-date-text-cybozu">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        <td>
                                                            <div class="control-gaia control-multiple_line_text-field-gaia">
                                                                <textarea  class="textarea-cybozu" id="cm-2" style="box-sizing: border-box; width: 299px; height: 84px;"> 
                                                            </textarea>
                                                        <div class="textarea-resize-cybozu" style="top: 68px; left: 283px;">
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div id="trainer-options" placeholder="Courses" class="kintoneplugin-select">
                                                             <select id="trainers2">
                                                                <option value="">Trainer</option>
                                                                <option value="Jess Frigo">Jess Frigo</option>
                                                                <option value="Erin Lukacovic">Erin Lukacovic</option>
                                                                <option value="Bri Barkley">Bri Barkley</option>
                                                                <option value="Megan Knepell">Megan Knepell</option>
                                                                <option value="Tina Rose">Tina Rose</option>
                                                                <option value="Taylor Hardgrave">Taylor Hardgrave</option>
                                                                <option value="Marny Knowles">Marny Knowles</option>
                                                                <option value="Nici Stephens">Nici Stephens</option>
                                                                <option value="Alex Edberg">Alex Edberg</option>
                                                                <option value="Kathy Thorpe">Kathy Thorpe</option>
                                                                <option value="Colleen Tekamp">Colleen Tekamp</option>
                                                            </select>
                                                        </div>  
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
              `,
      
        showCancelButton: true,
        cancelButtonColor: '#a37777',
        confirmButtonText: 'Update Class',
        confirmButtonColor: '#5eb06b',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            //SKILLS TAUGHT
            console.log('dash: ' + dash);
            var sk1Select = document.getElementById('skillSet-1');
            var sk1Selected = [...sk1Select.options]
                            .filter(option => option.selected)
                            .map(option => option.value)
            console.log('sk1Selected', sk1Selected);
            let dt =  document.getElementById('date-1').value;
            let cmt = document.getElementById('cm-1').value;
            let trnr = document.getElementById('trainers').value;
            let crs;
            if(dash == 'Agility 2 Dashboard' || dash == 'Agility 3 Dashboard' || dash == 'Agility 4 Dashboard')  {
             crs = document.getElementById('c_options');
            let crsSelected = [...crs.options]
                            .filter(option => option.selected)
                            .map(option => option.value)
            }
        if(skillsTP.length > 0) {
            var sk2Select = document.getElementById('skillSet-2');
            var sk2Selected = [...sk2Select.options]
                    .filter(option => option.selected)
                    .map(option => option.value)
                console.log(sk2Selected);
            let dt2 =  document.getElementById('date-2').value;
            let cmt2 = document.getElementById('cm-2').value;
            let trnr2 = document.getElementById('trainers2').value;
        }
                if(sk1Selected.length > 0){
                    updates.forEach(rec => {
                        console.log('rec', rec);
                        let recId = rec.$id.value;
                        let skillTaught = rec[skillTab].value;
                        let tab = [];
                        console.log('skillTaught', skillTaught);
                        if(skillTaught.length > 0){
                            skillTaught.forEach(row => {
                               tab.push(row);
                            });
                        }
                    if(dash !== 'Agility 2 Dashboard' || dash !== 'Agility 3 Dashboard' || dash !== 'Agility 4 Dashboard'){
                        let x = {
                            [fields.comments] :{
                                'value': cmt
                            },
                            [fields.Date]:{
                                'value': dt
                            },
                            [fields.trainer]:{
                                'value': trnr
                            },
                            [fields.skills] :{
                                'value': sk1Selected
                            }
                        };
                        tab.push(x);
                   
                        let body = {
                            app: 2,
                            id: recId,
                            record: {
                                [skillTab]: {
                                    'value': tab
                                }
                            }
                        };
                        console.log('body', body);
                    }  else {
                        let x = {
                            [fields.comments] :{
                                'value': cmt
                            },
                            [fields.Date]:{
                                'value': dt
                            },
                            [fields.courses]:{
                                'value': crs
                            },
                            [fields.trainer]:{
                                'value': trnr
                            },
                            [fields.skills] :{
                                'value': sk1Selected
                            }
                        };
                        tab.push(x);
                   
                        let body = {
                            app: 2,
                            id: recId,
                            record: {
                                [skillTab]: {
                                    'value': tab
                                }
                            }
                        };
                    }
                    console.log('body', body);
                   })
                }
            }
        
        
    })
  });
};
{/* <div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x2" style="user-select: none;">
<div class="goog-menuitem-content">
    <div class="goog-menuitem-checkbox"></div> 
        Meet/Treat &amp; Muzzle Conditioning</div>
        </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x3" style="user-select: none;">
<div class="goog-menuitem-content">
    <div class="goog-menuitem-checkbox"></div>
            Coordination &amp; Guarding Prevention
        </div>
        </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x4" style="user-select: none;">
<div class="goog-menuitem-content">
    <div class="goog-menuitem-checkbox"></div>
            Textures &amp; Mouthing Reduction
        </div>
    </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x5" style="user-select: none;">
<div class="goog-menuitem-content">
    <div class="goog-menuitem-checkbox"></div>
            Canine Body Language &amp; Recall Basics
        </div>
    </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x6" style="user-select: none;">
    <div class="goog-menuitem-content">
        <div class="goog-menuitem-checkbox"></div>
            Human &amp; Dog Play with Settle/Relax
        </div>
    </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x7" style="user-select: none;">
    <div class="goog-menuitem-content">
        <div class="goog-menuitem-checkbox"></div>
            Puppy Management
        </div>
    </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x8" style="user-select: none;">
<div class="goog-menuitem-content">
    <div class="goog-menuitem-checkbox"></div>
            Vet Handling
        </div>
    </div>
<div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x9" style="user-select: none;">
<div class="goog-menuitem-content">
    <div class="goog-menuitem-checkbox"></div>
            Following &amp; Sounds
        </div>
    </div> */}


export const handleUpdateKP2 = async (mbClass) => {
    return Swal.fire({
        title: ``,
        input: 'info',
        width: '660px',
        html: `
                    <div class="subtable-row-gaia subtable-row-6275602" style="">
                        <div class="subtable-row-label-gaia subtable-row-label-6275602">
                            <span class="subtable-row-label-text-gaia">Kinderpup 2 Lesson History Table</span></div>
                                <table class="subtable-gaia subtable-6275602 edit-subtable-gaia">
                                    <thead class="subtable-header-gaia">
                                        <tr>
                                            <th class="subtable-label-gaia subtable-label-multiple_select-gaia label-6275589" style="width: 305px;">
                                                <span class="subtable-label-inner-gaia" style="min-width: 305px;">Skills Taught (KP2)</span>
                                        </th>
                                            <th class="subtable-label-gaia subtable-label-date-gaia label-6275590" style="width: 179px;">
                                                <span class="subtable-label-inner-gaia" style="min-width: 179px;">Date Taught (KP2)</span>
                                        </th>
                                            <th class="subtable-label-gaia subtable-label-multiple_line_text-gaia label-6275591" style="width: 315px;">
                                                <span class="subtable-label-inner-gaia" style="min-width: 315px;">Comments</span>
                                        </th>
                                            <th class="subtable-label-gaia subtable-label-single_line_text-gaia label-6275592" style="width: 246px;">
                                                <span class="subtable-label-inner-gaia" style="min-width: 246px;">Trainer</span>
                                        </th>
                                            <th class="subtable-operation-gaia">
                                                <span style="width: 38px;"></span>
                                        </th>
                                    </tr>
                                </thead>
                                        <tbody>
                                                <tr>
                                                    <td style="max-width: 305px;">
                                                        <div class="control-gaia control-multiple_select-field-gaia">
                                                            <div class="control-value-gaia" style="overflow: visible;">
                                                                <div class="multipleselect-cybozu" id="skills" tabindex="0" style="height: 120px;">
                                                                    <div class="goog-menu goog-menu-vertical" role="menu" aria-haspopup="true" style="user-select: none;">
                                                    <div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x2" style="user-select: none;">
                                                        <div class="goog-menuitem-content">
                                                            <div class="goog-menuitem-checkbox"></div> 
                                                            Environmental Confidence &amp; IR    
                                                                </div>
                                                                </div>
                                                    <div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x3" style="user-select: none;">
                                                        <div class="goog-menuitem-content">
                                                            <div class="goog-menuitem-checkbox"></div>
                                                                    Body Language &amp; Dog to Dog Greetings
                                                                </div>
                                                                </div>
                                                    <div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x4" style="user-select: none;">
                                                        <div class="goog-menuitem-content">
                                                            <div class="goog-menuitem-checkbox"></div>
                                                                    Distractions
                                                                </div>
                                                            </div>
                                                    <div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x5" style="user-select: none;">
                                                        <div class="goog-menuitem-content">
                                                            <div class="goog-menuitem-checkbox"></div>
                                                                    Exercise &amp; Enrichment Needs
                                                                </div>
                                                            </div>
                                                    <div class="goog-menuitem goog-option" role="menuitemcheckbox" aria-checked="false" id=":x6" style="user-select: none;">
                                                            <div class="goog-menuitem-content">
                                                                <div class="goog-menuitem-checkbox"></div>
                                                                    People Greetings
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div class="control-design-gaia"></div>
                                                </div>
                                            </td>
                                                <td>
                                                    <div class="control-gaia control-date-field-gaia field-6275362">
                                                        <div class="control-value-gaia value-6275362" style="overflow: visible;">
                                                            <div class="input-date-cybozu">
                                                                <input type="text" class="input-date-text-cybozu">
                                                            </div>
                                                        </div>
                                                            <div class="control-design-gaia"></div>
                                                        </div>
                                                    </td>
                                                <td>
                                                    <div class="control-gaia control-multiple_line_text-field-gaia field-6275363">
                                                        <div class="control-value-gaia value-6275363" style="overflow: visible;">
                                                            <div class="input-text-outer-cybozu" style="height: 84px;">
                                                                <textarea  class="textarea-cybozu" style="box-sizing: border-box; width: 299px; height: 84px;"> 
                                                            </textarea>
                                                        <div class="textarea-resize-cybozu" style="top: 68px; left: 283px;">
                                                        </div>
                                                    </div>
                                                </div>
                                                        <div class="control-design-gaia"></div>
                                                    </div
                                                </td>
                                                <td>
                                                    <div class="control-gaia control-single_line_text-field-gaia field-6276676 control-lookup-field-gaia">
                                                        <div class="control-value-gaia value-6276676" style="overflow: visible;">
                                                            <div class="component-app-lookup-inputlookup">
                                                                <div class="input-text-outer-cybozu">
                                                                    <input type="text" class="input-text-cybozu">
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div class="control-design-gaia">
                                                        </div>
                                                    </div>
                                                </td>
                                                    <td class="subtable-operation-gaia"><button type="button" class="add-row-image-gaia" title="Add row"></button><button type="button" class="remove-row-image-gaia" title="Delete this row" style="display: none;"></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
              `,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Update Class'
        
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

        } else if (result.isDenied) {
            Swal.fire('Medication Submitted', '', 'info')
        }
    
    })
 
};