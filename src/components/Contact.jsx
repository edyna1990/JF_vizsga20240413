import React from "react";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => { 
    e.preventDefault()
    const formData={email, message, timestamp:Date.now()}
    console.log(formData)
  }
  return (
    <div className="container p-2 ">
      <section>
        <div className="container form-style">
          <h2>Lépj velünk kapcsolatba</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Üzenet:
              </label>
              <textarea
                type="text"
                className="form-control"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                rows="3"
                placeholder="Ide írhatja be az üzenetét"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Küldés
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
