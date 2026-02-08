import { useState } from "react";
import BookList from "./components/BookList";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Book Notes</h1>

      <Search onSearchResults={setSearchResults} />
      <BookList onSelectBook={setSelectedNoteId} />

      {selectedNoteId && <NoteList noteId={selectedNoteId} />}

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result) => (
              <li
                key={result.note_id}
                style={{ cursor: "pointer", marginBottom: "8px" }}
                onClick={() => setSelectedNoteId(result.note_id)}
              >
                <strong>{result.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
