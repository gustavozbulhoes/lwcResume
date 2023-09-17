import { LightningElement,api } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import FEEDBACK_OBJECT from '@salesforce/schema/Resume_Feedbacks__c'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import insertFeedback from '@salesforce/apex/resumeController.insertFeedback'

export default class ResumeFooterContainer extends LightningElement {

    showAboutModal = false;
    showFeedbackModal = false;
    showFeedbackModal = false;
    showOpenSourceModal = false;
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
    showSpinner;
    formFields={}

    aboutResume(){
        this.showAboutModal = !this.showAboutModal
    }

    feedback(){
        this.showFeedbackModal = !this.showFeedbackModal
    }

    openSource(){
        this.showOpenSourceModal = !this.showOpenSourceModal
    }
    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name]=value
    }

    createFeedback(){
        this.showSpinner = true
        //validations
        if(this.formFields.Feedback__c && (this.formFields.E_mail__c == undefined || this.formFields.E_mail__c == '' || this.validateEmail(this.formFields.E_mail__c))){
            this.createRecordAfterValidate() //call feedback creation
        }
        else if(this.formFields.E_mail__c != undefined && this.validateEmail(this.formFields.E_mail__c) == false){
            this.showToast('Error', 'Invalid e-mail format.', 'error')
            this.showSpinner=false
        }
        else{
            this.showToast('Error', 'The feedback is required.', 'error')
            this.showSpinner=false
        }
    }

    cancelFeedback(){
        this.formFields={}
        this.feedback()
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
    
        // build feedback sObject
        let feedback = { 'sobjectType': 'Resume_Feedbacks__c' };
        feedback.Name__c = this.formFields.Name__c
        feedback.Feedback__c = this.formFields.Feedback__c
        feedback.E_mail__c = this.formFields.E_mail__c
        feedback.OwnerId = '0053h0000038JtmAAE';
        
        // call apex method
        insertFeedback({feedback:feedback}).then(result=>{
            //Sucess
            this.showToast('Success!!', 'Feedback number ' + result + ' sent')
            this.formFields={}
            this.showSpinner=false
            this.feedback()
        }).catch(error=>{
            //Error
            console.error('error',error)
            this.showSpinner=false
            this.showToast('Error!!', error.body.message, 'error')
        })

    }
}