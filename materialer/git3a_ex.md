
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# Øvelser: Projektsamarbejde med git og github


## 1. Samarbejde i en gruppe vha. et "Centralized Workflow"

1. Find sammen i en gruppe (min 2 personer) og giv hinanden numre (1, 2, 3 etc.).
2. Gruppemedlem nummer 1 skal oprette et projekt i IntelliJ med noget meget simpelt "Hello world" kode.
    * commit og push herefter koden til github.
    * Tilføj herefter de andre gruppemedlemmer som "colaborators" til dette github repository.
3. De andre gruppemedlemmer skal nu klone dette repository. 
 
4. På skift skal i nu alle lave en ændring i koden "committe" og "pushe" den til Github. 
    * Efter hvert ````push```` skal de andre gruppemedlemmer lave et ````pull````

Dette skulle gerne fungere uden merge konflikter.

**Gør det samme men nu med merge konflikter**

1. Gentag punkt nummer 4 ovenfor, men nu skal alle gruppemedlemmer samtidig lave en ændring i koden (i den samme fil) og "pushe" det til github.

Dette giver (højest sandsynligt) nogle merge konflikter, og dem skal i løse.

**Gentag denne øvelse nogle gange så alle i gruppen prøver at være både nummer 1 og nummer 2**


## 2. Gentag øvelse 1 men nu med branches

Gentag øvelse 1, men denne gang skal hvert gruppemedlem lave deres ændringer til koden i en ny personlig feature-branch (kald dem evt. branches jeres fornavne). Disse branches skal pushes til GitHub, og de skal merges ind i "master"-branchen, før den også pushes til GitHub.


## 3. Samarbejde i en gruppe vha. et "Integration Manager workflow"
Gentag Øvelse 1, men denne gang skal I anvende et Integration Manager workflow. Det betyder, at I skal "forke" projektet og oprette pull requests i stedet for at give alle i gruppen skriveadgang til projektet på GitHub. Der vil være en projektleder (eller muligvis flere), som har rettigheder til at merge de andre gruppemedlemmers ændringer ind i projektets master-branch.



<!--
## 1. Integration manager
[Fork dette repository]() og clon det efterfølgende til din lokale computer. Vent herefter til Claus har lavet et nyt commit i det originale repository.

1. Synkroniser nu din forked version med det originale repository online på github og ````pull```` ændringerne ned på din lokale computer.
2. Vent herefter på at Claus har lavet et commit mere. 
3. På din lokale computer skal du gennem termanalen opsætte en ny remote til det originale repository.
4. ````pull```` det nye commit ned fra det originale repository og ````merge```` det sammen med din master branch lokalt. ````push```` dert nye commit til din forkede version på github. 

-->
 

     

