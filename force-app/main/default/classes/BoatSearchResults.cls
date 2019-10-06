public with sharing class BoatSearchResults {
    public BoatSearchResults() {

    }

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        String query = 'SELECT Id, Name, Picture__c, Contact__r.Name FROM Boat__c';
        if (!String.isEmpty(boatTypeId)) {
            query += ' WHERE BoatType__r.Name = :boatTypeId';
        }
        return Database.query(query);
    }

    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        return [SELECT Id, Name FROM BoatType__c];
    }
}
