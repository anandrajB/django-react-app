
import firebase_admin
from firebase_admin import credentials , firestore

cred = credentials.Certificate("Accounts.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref =  db.collection('django').document('auth_user').get(field_paths={'email'})
if doc_ref.exists:
    print(doc_ref.to_dict())
else:
    print("no document")