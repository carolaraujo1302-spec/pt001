.page {
    width: min(980px, 92vw);
    margin: 18px auto;
}

.card {
    background: #fff;
    padding: 18px;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(2, 24, 64, .08);
}

.card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.title {
    margin: 0;
    font-size: 1.6rem;
    color: #0b1b33;
}

.btn {
    border: 0;
    border-radius: 10px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: 800;
}

.btn-secondary {
    background: #e5e7eb;
    color: #0b1b33;
}

.btn-primary {
    background: #1d4ed8;
    color: #fff;
}

.form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
}

.field label {
    display: block;
    font-weight: 700;
    margin-bottom: 6px;
    color: #0b1b33;
}

.field input,
.field select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #dbe3f1;
    border-radius: 10px;
    outline: none;
    box-sizing: border-box;
}

.field input:focus,
.field select:focus {
    border-color: #1d4ed8;
    box-shadow: 0 0 0 4px rgba(29, 78, 216, .15);
}

.alert {
    padding: 10px 12px;
    border-radius: 10px;
    font-weight: 800;
}

.alert-error {
    background: #fee2e2;
    color: #991b1b;
}

.alert-success {
    background: #dcfce7;
    color: #166534;
}

.loading {
    padding: 14px;
    color: #6b7280;
    font-weight: 800;
}

.container,
.card {
    max-width: 900px;
    margin: 40px auto;
    padding: 32px;
    background: #fff;
    border-radius: 16px;
}

.field {
    width: 100%;
}

.form {
    width: 100%;
}

.form .btn,
button[type="submit"] {
    margin-top: 20px;
    margin-bottom: 10px;
}