export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            hero:{
                title: 'Sarah & Salvo',
                subtitle: 'are (finally) getting married!',
                description: 'Come celebrate this overdue union and join us for a good old fashioned shindig!',
                when: '12th of September 2025',    
            },
            where: {
                title: 'Where',
                location: 'The Dean Hotel',
                description: 'The ceremony and reception will take place at The Dean Hotel in the heart of Dublin City.',
                address: '33 Harcourt St, Saint Kevin\'s, Dublin',
                map: 'View on map' 
            },
            rsvp: {
                title: 'RSVP',
                description: 'Please RSVP by the 1st of July 2025',
                html:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdpas_-3QTXst9jk0Z235ayjKHHJmcCn4uFmdInZB-E3ONN8Q/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'
            }
            
        },
        it: {
            welcome: 'Benvenuti',
            hero:{
                title: 'Salvo e Sarah',
                subtitle: 'si sposano (finalmente)!',
                description: 'Venite a celebrare la nostra attesissima unione ma sopratutto per godervi una bella festicciola!',
                when: '12 Settembre 2025',    
            },
            where: {
                title: 'Dove',
                location: 'The Dean Hotel',
                description: 'La cerimonia ed il ricevimento si terranno nel bellissimo The Dean hotel nel cuore di Dublino.',
                address: '33 Harcourt St, Saint Kevin\'s, Dublin',
                map: 'Vedi sulla mappa'
            },
            rsvp: {
                title: 'RSVP',
                description: 'Per favore confermate la vostra presenza entro l\'1 Luglio 2025',
                html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchCM2klEELD-jR0xaY6-z5dl-SMEBBNgLijL1qeTDofrgAcA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'
            }

        }
    }
}))