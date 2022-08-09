import {
  KintoneRestAPIClient
} from "@kintone/rest-api-client";
// require('dotenv').config();
// import keys from './keys';



export const addRecords = async (client, newDateVal, status, recID, agencyNum) => {
  
  const clientUpdate = new KintoneRestAPIClient({
    'baseUrl': "https://congobrands.kintone.com",
    'auth': {
      'apiToken': 'n4nIZKaEzYut4DnmTMKhyub9BvbKMpYZ5oYtlsp1'
    }
  });
  
    const body = {
      app: 160,
      record: {
          Lookup: {
              value: client,
              lookup: true
          },
          stubDate: {
              value: newDateVal
          },
            resident_status: {
              value: status
          },
          Credit: {
            value: 'Yes'
          },
          Resident_Name: {
            value: client
          },
          resident_record_number: {
            value: recID
          },
          agency_number: {
            value: agencyNum
        }
      }
    }


  console.log('body:', body);
  try {
    await clientUpdate.record.addRecords(body); //response ==> {records: [{}, {}]}
  } catch (err) {
    console.log(err);
    return [];
  }
}

