public with sharing class BoatSearchResults {
    public BoatSearchResults() {

    }

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        String query = 'SELECT Id, Name, Picture__c, Contact__r.Name FROM Boat__c';
        if (String.isEmpty(boatTypeId)) {
            query += ' WHERE BoatType__c = :boatTypeId';
        }
        return Database.query(query);
    }
}
