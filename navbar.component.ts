.page {
  width: min(980px, 92vw);
  margin: 20px auto;
}

.auth-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 10px 30px rgba(2, 24, 64, 0.08);
}

.title {
  margin: 0;
  font-size: 1.6rem;
  color: #0b1b33;
}

.subtitle {
  margin: 6px 0 18px;
  color: #4b5563;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.field label {
  display: block;
  font-weight: 700;
  margin-bottom: 6px;
  color: #0b1b33;
}

.field input {
  width: 97%;
    padding: 12px;
    border: 1px solid #dbe3f1;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
}

.field input:focus {
  border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
}

.btn {
  border: 0;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 700;
}

.btn-primary {
  background: #1d4ed8;
  color: white;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  margin-top: 14px;
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 700;
}

.alert-error {
  background: #fee2e2;
  color: #991b1b;
}

.alert-success {
  background: #dcfce7;
  color: #166534;
}

.hint {
  margin-top: 16px;
  color: #6b7280;
  font-size: 0.95rem;
}

.forgot-link {
    display: inline-block;
    margin-top: 18px;
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
}

.forgot-link:hover {
    text-decoration: underline;
}