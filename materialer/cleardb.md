<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 


# Tutorial: ClearDB og Heroku deployment

ClearDB er en mysql database management system, som kan tilkøbes hos Heroku. Den mindste version er gratis. Det følgende er en beskrivelse af hvordan du tilkøber den på Heroku og hvordan du bruger den i dine Spring Boot projekter. 

## Kreditkort
Selvom den database du skal bruge som udgangspunkt er gratis skal du for at få lov til at bruge den tilknytte et kreditkort til din konto på Heroku. 
Klik på brugericonet øverst i højre hjørne. Vælg derefter "Account settings" og "billing". Indtast jeres kreditkortoplysninger.   

**Note:** Selvom du formegentligt ikke kommer til at betale noget for brugen af din tilkyttede database, kan jeg ikke garanterer at du ikke kommer til det! 


## Tilføj ClearDB til din app på Heroku
Du kan nu under menupunktet "Resources" tilføje add-ons.

![](../img/cleardb_addon.png) 

Skriv clear, og klik på "ClearDB".     

I den dropdown der kommer op har du nu mulighed for at vælge forskellige versioner.     

Vælg "Ignite" og klik på "Submit order form".

![](../img/submit_order_form.png)

Du har nu oprettet en database og det næste der skal ske er at du skal have fat i alle de informationer du skal bruge for at forbinde til din database fra endte "Mysql Workbench", "intelliJ´s database tab", eller fra dit spring boot projekt gennem din "application.properties".

## Connectionstring
På Hekoku klik på "Settings" menupunktet.    
Klik på knappen "Reveal config vars".    
Kopier url´en der starter med mysql://

### Forklaring på url
````
	mysql://b270aec8833o9i:f6015344@eu-cdbr-west-01.cleardb.com/heroku_cf41053fe068e8c?reconnect=true
````
* De bogstaver og tal der kommer efter mysql:// og indtil kolon (:) er dit brugernavn (b270aec8833o9i).     
* De bogstaver og tal der kommer efter kolon (:) og indtil (@) er dit password (f6015344).    
* Det der kommer efter @ og til efter .com er serveren/host (eu-cdbr-west-01.cleardb.com).    
* Efter .com/ og indtil (?) har du navnet på din database (heroku_cf41053fe067y7r).        
* ?reconnect=true er et parameter med info.        


For at få din applikation til at virke ordentligt på Heroku er det nødvendingt at tilføje et parameter. Efter (?reconnect=true) skal du tilføje: **&autoReconnect=true**

Den fulde url kommer derfor til at se sådan ud:
````
	mysql://b270aec8833o9i:f6015344@eu-cdbr-west-01.cleardb.com/heroku_cf41053fe067y7r?reconnect=true&autoReconnect=true 
````

#### application.properties 
application.properties for denne database vil derfor se således ud:

```` 
	user=b270aec8833o9i
	password=f6015344
	url=jdbc:mysql://eu-cdbr-west-01.cleardb.com/heroku_cf41053fe067y7r?reconnect=true&autoReconnect=true
```` 
