public without sharing class resumeController {
    
    @auraenabled
    public static string insertFeedback(Resume_Feedbacks__c feedback ) {

        //Insert record and find the informations
        insert feedback;
		feedback = [SELECT Name,Name__c,Feedback__c FROM Resume_Feedbacks__c WHERE Id=:feedback.id LIMIT 1];

        //Return feedback number
        return feedback.Name;
        
    }
}