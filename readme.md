Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente

||PROCEDURA||

Collego vue con il file html
Creo il container per vue nel file html
Aggiungo la struttura di vue nel file js
Creo un array con la lista di oggetti con due proprietá ciascuno al suo interno
Stampo con un ciclo for la lista sull'html
Creo una variabile dove se la propritá done é uguale a ture il testo verrá sbarrato
Creo un ascoltatore di eventi per far eliminare l'oggetto dalla lista una volta cliccata la 'x' precedentemente creata a fianco dell'oggetto
Creo un input testuale e un bottone "aggiungi" nel file html 
Creo un ascoltatore di eventi per fare in modo di creare un nuovo oggetto con il testo inserito nell'input testuale per poi stamparlo in pagina