export default {
    cpfCnpj: (v: string): string => {
        const valorOriginal = v;
        v = v.replace(/\D/g, ""); // remove tudo q nao é digito

        if (v.length >= 15) return valorOriginal.slice(0, -1);
        if (v.length <= 14) {
            // CPF

            // Coloca um ponto entre o terceiro e o quarto dígitos
            v = v.replace(/(\d{3})(\d)/, "$1.$2");

            // Coloca um ponto entre o terceiro e o quarto dígitos
            // de novo (para o segundo bloco de números)
            v = v.replace(/(\d{3})(\d)/, "$1.$2");

            // Coloca um hífen entre o terceiro e o quarto dígitos
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else {
            // CNPJ

            // Coloca ponto entre o segundo e o terceiro dígitos
            v = v.replace(/^(\d{2})(\d)/, "$1.$2");

            // Coloca ponto entre o quinto e o sexto dígitos
            v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

            // Coloca uma barra entre o oitavo e o nono dígitos
            v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");

            // Coloca um hífen depois do bloco de quatro dígitos
            v = v.replace(/(\d{4})(\d)/, "$1-$2");
        }

        return v;
    },
    number: (v: string) => {
        return (v = v.replace(/[^\d.-]/g, ""));
    },
    date: (v: string) => {
        return v
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1");
    },
}