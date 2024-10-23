import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <Router>
            <switch>
                {/* Define routes here */}
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
                  <div className="App">
                    <h1>Contingency</h1>
                    <p>Preparing you for the unseen.</p>
                    <p>At last, however, her listless walk brought her up alongside him, and still he
      said nothing. The cruelty of fooled honesty is often great after enlightenment, and
      it was mighty in Clare now. The outdoor air had apparently taken away from him
      all tendency to act on impulse; she knew that he saw her without irradiation — in
      all her bareness; that Time was chanting his satiric psalm at her then —
      Behold, when thy face is made bare, he that loved thee
      shall hate;
      Thy face shall be no more fair at the fall of thy fate.
      For thy life shall fall as a leaf and be shed as the rain;
      192 Phase the Fifth — The Woman Pays
      And the veil of thine head shall be grief, and the crown
      shall be pain.
      He was still intently thinking, and her companionship had now insufficient
      power to break or divert the strain of thought. What a weak thing her presence
      must have become to him! She could not help addressing Clare.
      ‘What have I done — what have I done! I have not told of anything that
      interferes with or belies my love for you. You don’t think I planned it, do you? It
      is in your own mind what you are angry at, Angel; it is not in me. O, it is not in
      me, and I am not that deceitful woman you think me!</p>
                  </div>
            </switch>
            {/* Add your routes here */}
            <h1>Welcome to React Router</h1>
        </Router>
    );
}
export default App;