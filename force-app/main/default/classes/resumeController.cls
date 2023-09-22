public without sharing class resumeController {
    
    @auraenabled
    public static string insertFeedback(Resume_Feedbacks__c feedback ) {

        //Insert record and return the generated Name
        insert feedback;
		feedback = [SELECT Name FROM Resume_Feedbacks__c WHERE Id=:feedback.id LIMIT 1];
        return feedback.Name;
        
    }
}