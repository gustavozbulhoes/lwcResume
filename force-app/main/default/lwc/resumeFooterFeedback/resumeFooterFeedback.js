import { LightningElement,api } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import FEEDBACK_OBJECT from '@salesforce/schema/Resume_Feedbacks__c'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ResumeFooterFeedback extends LightningElement {
    
    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'clean',
        'table',
        'header',
        'color',
    ];
    showSpinner
    
    formFields={}
    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name]=value
    }
    createFeedback(){
        this.showSpinner = true

        console.log("formFields",JSON.stringify(this.formFields))
        //validations
        if(this.formFields.Feedback__c && (this.formFields.E_mail__c == undefined || this.validateEmail(this.formFields.E_mail__c))){
            this.createRecordAfterValidate()
            this.showSpinner=false
        }
        else if(this.formFields.E_mail__c != undefined && this.validateEmail(this.formFields.E_mail__c) == false){
            this.showToast('Error', 'Invalid E-mail Format.', 'error')
            this.showSpinner=false
        }
        else{
            this.showToast('Error', 'The feedback is required.', 'error')
            this.showSpinner=false
        }
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    createRecordAfterValidate(){
        this.formFields = {...this.formFields, OwnerId:"0053h0000038JtmAAE"}
        const recordInput = {apiName:FEEDBACK_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(result=>{
        this.showToast('Success!!', 'feedback sent')
        this.template.querySelector('form.createForm').reset()
        this.formFields={}
        }).catch(error=>{
        /*
        issue: https://trailblazer.salesforce.com/issues_view?id=a1p3A000001GN1gQAG&title=community-guest-user-may-see-the-error-the-requested-resource-does-not-exist-while-creating-record-from-community-using-the-lightning-recordeditform
        */
        this.showToast('Success!!', 'feedback sent')
        this.closeModal()
        })
    }

    closeModal(){
        console.log("entrei no close modal")
        const myEvent = new CustomEvent('close')
        this.dispatchEvent(myEvent)
    }
}