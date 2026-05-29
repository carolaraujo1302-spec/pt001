.page {
  width: min(900px, 92vw);
  margin: 22px auto 40px;
}

.title {
  margin: 0 0 14px;
  color: #0b1b33;
  font-size: 1.5rem;
}

.card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  padding: 18px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 900;
  color: #344054;
}

input {
  height: 42px;
  border-radius: 10px;
  border: 1px solid #d0d5dd;
  padding: 0 12px;
  background: #f8fafc;
  outline: none;
}

input:focus {
  border-color: #1f5eff;
  box-shadow: 0 0 0 4px rgba(31, 94, 255, 0.12);
  background: #fff;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 18px;
}

.btn {
  border-radius: 12px;
  border: 1px solid #d0d5dd;
  background: #fff;
  color: #0b1b33;
  font-weight: 900;
  height: 42px;
  padding: 0 16px;
  cursor: pointer;
  text-decoration: none;
}

.btn-edit {
  background: #1d4ed8;
  border-color: #1d4ed8;
  color: #fff;
}

.alert {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 900;
}

.alert-error {
  background: #fee4e2;
  border: 1px solid #fda4af;
  color: #b42318;
}

.alert-success {
  background: #dcfce7;
  border: 1px solid #86efac;
  color: #166534;
}

.help {
  margin-top: 12px;
  color: #667085;
  font-weight: 700;
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

