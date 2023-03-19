public with sharing class AccountLoader {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        //Por implementar
        /*
        Dicas:
        - Deve-se devolver, para uso prévio no LWC, um array de contas que tenha os campos necessários a ser apresentados no LWC
        - Aqui em apex o tipo de dados do retorno estará em lista de contas (List<Account>), mas estes dados em javascript serão interpretados como um JSON
        - Em caso de necessidade pode-se usar o console.log e o inspect do browser para debug em LWC, e o System.Debug() e a developer console para debug em apex
        */
       List<Account> accsData = [SELECT Id, Name, Type, Owner.Name
            FROM Account WITH SECURITY_ENFORCED];
        System.Debug(accsData);
        return accsData;
    }
}