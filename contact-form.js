// Gestionnaire pour le formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[class="space-y-4"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                Message: document.getElementById('Message').value
            };
            
            // Validation basique
            if (!formData.name || !formData.email || !formData.message) {
                alert('Veuillez remplir tous les champs obligatoires (*)');
                return;
            }
            
            // Validation email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Veuillez entrer une adresse email valide');
                return;
            }
            
            // Afficher un message de chargement
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="animate-spin">⌛</span> Envoi en cours...';
            submitButton.disabled = true;
            
            // Simuler l'envoi (à remplacer par un vrai appel API)
            setTimeout(() => {
                // Ici, vous devriez envoyer les données à votre backend
                // Exemple avec fetch :
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Message envoyé avec succès !');
                        contactForm.reset();
                    } else {
                        alert('Erreur lors de l\'envoi: ' + data.message);
                    }
                })
                .catch(error => {
                    alert('Erreur réseau: ' + error.message);
                })
                .finally(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                });
                */
                
                // Pour le moment, simulation :
                console.log('Données du formulaire:', formData);
                alert('Message envoyé avec succès ! Nous vous répondrons dans les 24h.');
                contactForm.reset();
                
                // Restaurer le bouton
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
            }, 1500);
        });
    }
    
    // Gestion des boutons WhatsApp/Messenger
    const whatsappBtn = document.querySelector('a[href*="wa.me"]');
    const messengerBtn = document.querySelector('a[href*="m.me"]');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Vous pouvez ajouter du suivi ici
            console.log('WhatsApp click');
        });
    }
    
    if (messengerBtn) {
        messengerBtn.addEventListener('click', function(e) {
            // Vous pouvez ajouter du suivi ici
            console.log('Messenger click');
        });
    }
});
