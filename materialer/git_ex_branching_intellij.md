<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# Git branching øvelser (IntelliJ)
Følgende øvelser kan i lave i ubuntu gennem terminalen, eller via intellij på jeres Windows- eller Mac OS. I bestemmer selv, men øvelserne er beskrevet som om de skal laves i IntelliJ.

## 1. Branch øvelse
I IntelliJ skal du oprette et nyt projekt (eller bruge noget af det du allerede har lavet i programmeringsfaget).    
* Initialiser det som et git repopsitory. 
* lav en branch og kald den "feat1".
    * Tilføj noget nyt funktionalitet til dit projekt. (det kunne være en ny usecase, eller en "hello feat1" kommentar).

* Lav et "commit"
* Skift herefter til din master branch

* Undersøg hvor mange branche du har og skift imellem dem og se koden ændre sig.

## 2. Merge øvelse (uden konflikter)
Sørg for at du er i din ```` master ```` branch.    

Du skal nu "smelte" (merge) den kode du har lavet i din ```` feat1 ```` branch sammen med det du har i ```` master ````.

Tjek din kode i IntelliJ og se at du har smeltet det sammen.

## 3. Merge øvelse (med merge konflikter)
Lav en ny branch og kald den ```` feat2 ```` 

Lav noget ny funktionallitet til din kode. Dette skal være en ændring i en fil og noget kode der allerede eksisterer. 
Lav herefter et ```` commit ```` 

Skift tilbage til din ```` master ```` branch og lav en ny branch og kald den ```` bugfix ````    

Lav nogle ændringer i den samme fil som du har redigeret i din ```` feat2 ```` branch.     
Lav et ```` commit ````.

Skift tilbage til din ```` master ```` branch og merge din bugfix branch her til.

Herefter skal du merge din ```` feat2 ```` branch ind i master.

Dette giver en konflikt. Klik på "merge" og beslut dig for hvilke dele af koden fra de to branches der skal bevares.

## I skal kunne dette i søvne til jeres eksamen
I skal kunne dette i søvne til jeres eksamen. Det er en utrolig triviel opgave hvis bare i øver jer på det.    
Måden at øve det på er at I, i resten af dette semester (i programmeringsfaget og alle andre steder) laver jeres kode på denne måde.    
Altså lav en feat branch for nye features og bugfix branches for ændringeer i kode, og aldrig rediger noget kode direkte i jeres master branch. 

## Gentag alle disse øvelser 1000 gange i løbet af den næste uge!! 
