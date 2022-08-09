import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

export const ToastSuccess = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});


const showAddRecordMessage = (clientName, addRecord, medChoice) => {
  return Swal.fire({
  title: `Add another medication?`,
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Add Another Medication`,
  cancelButtonText: `I'm Done!`,
  text: `You have successfully submitted ${medChoice} for ${clientName}.` 
      }).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    addRecord()
  } else if (result.isDenied) {
    Swal.fire('Medication Submitted', '', 'info')
  }
})
}

export const displayAdmin_Modal = (email) => {
  return Swal.fire({
    title: ``,
    input: 'info',
    width: '660px',
    html:
    `<div class="providerName">Employee Name: ${clientName}</div>
    <div class="providerName">Log Time: ${dateTime1} </div>
    <br>
    <div class="providerName">Was ${medName} Given?

        <div class"kintoneplugin-dropdown givenAnswer">
          <form action="" method="get">
            <label for="answers"></label>
            <input list="answers" class="medBox" name="answer" id="answer">
              <datalist id="answers">
                <option value="Given">
                <option value="Missed">
                <option value="Missed - Away from facility">
                <option value="Refused">
                <option value="Given < 48 hrs. after Missed">
                <option value="Given > 48 hrs. after Missed">
              </datalist>
          </form>
          </div>
    </div>
</div>
      
     
          `,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: 'Submit'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
     
    } else if (result.isDenied) {
      Swal.fire('Medication Submitted', '', 'info')
    }
  })
};


export const displayEsignModal = () => {
  return Swal.fire({
    title: `E-Signature Consent Agreement`,
    input: 'info',
    width: '660px',
    html:
      `
          <div>BY CLICKING THE I AGREE BUTTON BELOW You consent to EMS E-Sign Agreement.  You confirm that your "Username" will be used as your electronic signature when appended to this Med Log Record.
           You agree to the terms and conditions of all applicable notices and disclosures. 
          </div>
          `,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: 'I Agree'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
     
    } else if (result.isDenied) {
      Swal.fire('Medication Submitted', '', 'info')
    }
  })
};


const displayTableData = (rows, user, clientLookup, setTime2) => {
  return Swal.fire({
    title: `Time Clock`,
    width: '980px',
    html:
      `<div class="providerName">Provider Name: ${user}</div>
      <div class="providerName">Client Name: ${clientLookup}</div>
      <div class="time">TimeStamp:  ${setTime2}</div>
      <div class="scrollit">
      <table class="kintoneplugin-table">
          <thead>
          <tr>
              <th class="kintoneplugin-table-th1"><span class="title1">Completed</span></th>
              <th class="kintoneplugin-table-th2"><span class="title2">IP#</span></th>\
              <th class="kintoneplugin-table-th2"><span class="title2">IP Description</span></th>
              <th class="kintoneplugin-table-th2"><span class="title2">Mileage</span></th>
              <th class="kintoneplugin-table-th2"><span class="title2">Completed Task Notes</span></th>
              <th class="kintoneplugin-table-th-blankspace"></th>
          </thead>
          <tbody class="rows">   
          ${rows}
          </tbody>
      </table>
      </div>`,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: 'Submit'
  })
};

const displayClockInMessage = (user, clientLookup, setTimeIn) => {
  return Swal.fire({
    title: `Time Clock`,
    width: '540px',
    html:
      `<div class="providerName">Provider Name: ${user}</div>
      <div class="providerName">Client Name: ${clientLookup}</div>
      <div class="time"> ${setTimeIn}</div>
      </div>`,
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: 'Submit'
  })
};


const displayNoDataMessage = () => {
  return Swal.fire({
    title: `Clock IN`,
    width: '800px',
    text: 'No IP records found.'
  });
}
const displayDisableMessage = () => {
  return Swal.fire({
    title: `Clock IN`,
    icon: 'info',
    width: '500px',
    text: 'You have already clocked in.'
  });
}

const showSuccessMessage = (clientName) => {
  return Swal.fire({
    title: `Medication Log Creation Success`,
    icon: 'info',
    width: '600px',
    text: `You have successfully created Medication Logs for ${clientName}.`
  });
}



export {
  showAddRecordMessage,
  showSuccessMessage,
  displayNoDataMessage,
  displayDisableMessage,
}