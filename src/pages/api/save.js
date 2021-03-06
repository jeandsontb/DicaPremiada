import  { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';
import { fromBase64 } from '../../../utils/base64';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const genCupom = () => {
    const cod = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
    return cod.substr(0, 4) + '-' +cod.substr(4, 4) + '-' +cod.substr(8, 4);
}


export default async(req, res) => {

    try {

        doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })    
        await doc.loadInfo();
    
        const sheet = doc.sheetsByIndex[1];
        const data = JSON.parse(req.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A3:B3');

        const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
        const textPromocaoCell = sheetConfig.getCell(2, 1);

        let Cupom = '';
        let Promo = ''; 

        if(mostrarPromocaoCell.value === 'VERDADEIRO') {
            Cupom = genCupom();
            Promo = textPromocaoCell.value;
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
            Cupom,
            Promo,
        })

        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
    } catch (err) {
        console.log(err);
        res.end('error');
    }
}