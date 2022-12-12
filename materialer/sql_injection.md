<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 

# SQL INJECTIONS

## HTTP get vs post
![](../img/sqlinject/get_post.png)

##
For at et SQLi attack kan være succesfuldt, bliver angriberen nød til at:
* Kende til det basale format/dialekt af den SQL sætning der bruges.
* have en eller anden ide om hvordan DB tabellerne er organinseret (navn på tabel, etc.)

Et godt gæt på en sql sætning tilhørende følgende login form kunne se sådan ud:

![](../img/sqlinject/inject_1.png)

````
	SELECT * FROM users WHERE user='username’ AND pass='password’
	el.
	SELECT * FROM people WHERE username='username’ AND password='password’

````

Så hvis vi taster følgende ind i formen:

![](../img/sqlinject/inject_2.png)

Kunne SQL sætningen komme til at se sådan ud:

````
	SELECT * FROM users WHERE user='alice' AND pass='12345'
````

I SQL (og de fleste andre sprog) vil **AND** returnere _True_ hvis begge betingelser er sande.     
**OR** vil returnere _True_ hvis bare an af betingelserne er sande.     

Det kan vi benyttte os af ved at indtaste følgende i login formen. 

![](../img/sqlinject/inject_3.png)

Hvilket giver følgenede SQL sætning:

````
	SELECT * FROM users WHERE user='admin' OR '1'='1' AND pass='test'
````
Det er her vigtigt angriberen kan udforme sytaktisk korrekt SQL sætninger.    

Læg også mærke til at det ikke er nødvendigt at kende til password, da det aldrig bliver evalueret pga. AND/OR. Det er også ligegyldigt om man skriver admin, eller noget andet (xxx etc.).     

Angriberen kan opgå gøre brug af ```--``` til at udkommentere kode. 

![](../img/sqlinject/inject_4.png)

Hvilket giver følgende SQL sætning. 

````
	SELECT * FROM users WHERE user='admin' OR '1'='1'--' AND pass='test'
````
pass bliver ikke eksikveret da det er udkommenteret.     

En anden mulighed kunne være at skrive dette: 
![](../img/sqlinject/inject_5.png)

Hvilket giver følgende SQL sætning. 

````
	SELECT * FROM users WHERE user='whatever' AND pass='test' OR 'a' = 'a'
````
Her returneres alt fra **users** hvis **user** er **whatever** og **pass** er **test** (hvilket jo nok aldrig vil passe) eller hvis **'a' = 'a'** (hvilket altid er tilfældet. )



