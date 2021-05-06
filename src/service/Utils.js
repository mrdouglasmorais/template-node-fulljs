const Utils = {
    parseRequestURL: () => {
        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split('/');
        let request = {
            resource: null,
            id: null,
            verb: null
        }

        request.resource = r[1];
        request.id = r[2];
        request.verb = r[3]

        return request;
    },
    
    redirect_to: (next) => location.replace(`#/${next}`),

    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

}

export default Utils;