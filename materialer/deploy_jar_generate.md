
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 

# Opret en jar fil i IntelliJ
Først skal du sørge for at dit projekt er et MavenProjekt og ikke feks. Graddle

1. Åbn dit projekt i IntelliJ (File → Open).
2. Åben Maven-værktøjsvinduet (View → Tool Windows → Maven).
3. Klik på "package" under "Lifecycle" for at at lave en JAR fil.
4. Du kan nu se outputtet i run windowet nedenunder.
5. Din JAR-fil vil nu være tilgængelig i "target/your-app-1.0.jar"

## Eksekver din jar fil

* ````cd```` ind i targetmappen hvoir din Jar fil er.
* skriv komandoen:
    
```
    java -jar your-app-1.0.jar 
```



