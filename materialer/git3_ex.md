
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# Øvelser: Projektsamarbejde med git og github


## 1. Samarbejde i en gruppe vha. et "Centralized Workflow"

1. Find sammen i en gruppe (min 2 personer) og giv hinanden numre (1, 2, 3 etc.).
2. Gruppemedlem nummer 1 skal på Github lave et nyt repository og tilføje de andre gruppemeldlemmer som "collaborators".
3. Gruppemedlem nummer 2 skal nu oprette et projekt i IntelliJ med noget meget simpelt "Hello world" kode.
    * Lav herefter følgende komandoer:

```
    git init
    git add .
    git commit -m "initial commit"

    git remote add origin <clone url (.git) til det nye githubrepository>
    git push origin master (eller main)
``` 
 
4. Alle andre gruppemedlemmer skal nu ````git clone <clone url (.git) til det nye githubrepository>```` det nye repository. 
5. På skift skal i nu alle lave en ændring i koden og pushe den til Github. 
    * Efter hvert ````git push```` skal de andre gruppemedlemmer lave et ````git pull origin master````

Dette skulle gerne fungere uden merge konflikter.

**Gør det samme men nu med merge konflikter**

1. Gentag punkt nummer 5 ovenfor, men nu skal alle gruppemedlemmer samtidig lave en ændring i koden og "pushe" det til github.

Dette giver (højest sandsynligt) nogle merge konflikter, og dem skal i løse.

**Gentag denne øvelse nogle gange så alle i gruppen prøver at være både nummer 1 og nummer 2**


## 2. Gentag øvelse 1 men nu med branches

Gentag øvelse 1, men denne gang skal hvert gruppemedlem lave deres ændringer til koden i en ny personlig feature-branch. Disse branches skal pushes til GitHub, og de skal merges ind i "master"-branchen, før den også pushes til GitHub.


## 3. Samarbejde i en gruppe vha. et "Integration Manager workflow"
Gentag Øvelse 1, men denne gang skal I anvende et Integration Manager workflow. Det betyder, at I skal forke projektet og oprette pull requests i stedet for at give alle i gruppen skriveadgang til projektet på GitHub. Der vil være en projektleder (eller muligvis flere), som har rettigheder til at merge de andre gruppemedlemmers ændringer ind i projektets master-branch.



<!--
## 1. Integration manager
[Fork dette repository]() og clon det efterfølgende til din lokale computer. Vent herefter til Claus har lavet et nyt commit i det originale repository.

1. Synkroniser nu din forked version med det originale repository online på github og ````pull```` ændringerne ned på din lokale computer.
2. Vent herefter på at Claus har lavet et commit mere. 
3. På din lokale computer skal du gennem termanalen opsætte en ny remote til det originale repository.
4. ````pull```` det nye commit ned fra det originale repository og ````merge```` det sammen med din master branch lokalt. ````push```` dert nye commit til din forkede version på github. 

-->
 

     

