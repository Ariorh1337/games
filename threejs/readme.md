### Install

WEBXR need https, please make sure what you do the steps of the instruction:

- 1: OpenSSL Installation: [link](https://github.com/openssl/openssl/blob/master/NOTES-WINDOWS.md)

NOTES: 
    You will need to install Perl Strawberry instead ActivePerl [link](https://strawberryperl.com/)
    Install NASM as admin requared
    Install VisualStudio C++ [link](https://visualstudio.microsoft.com/ru/vs/features/cplusplus/)


- 2: After you get OpenSSL installed, go into default directory and create `openssl.cnf`

Notes:
    #
    # OpenSSL configuration file.
    #

    # Establish working directory.

    dir                 = .

    [ ca ]
    default_ca              = CA_default

    [ CA_default ]
    serial                  = $dir/serial
    database                = $dir/certindex.txt
    new_certs_dir               = $dir/certs
    certificate             = $dir/cacert.pem
    private_key             = $dir/private/cakey.pem
    default_days                = 365
    default_md              = md5
    preserve                = no
    email_in_dn             = no
    nameopt                 = default_ca
    certopt                 = default_ca
    policy                  = policy_match

    [ policy_match ]
    countryName             = match
    stateOrProvinceName         = match
    organizationName            = match
    organizationalUnitName          = optional
    commonName              = supplied
    emailAddress                = optional

    [ req ]
    default_bits                = 1024          # Size of keys
    default_keyfile             = key.pem       # name of generated keys
    default_md              = md5               # message digest algorithm
    string_mask             = nombstr       # permitted characters
    distinguished_name          = req_distinguished_name
    req_extensions              = v3_req

    [ req_distinguished_name ]
    # Variable name             Prompt string
    #-------------------------    ----------------------------------
    0.organizationName          = Organization Name (company)
    organizationalUnitName          = Organizational Unit Name (department, division)
    emailAddress                = Email Address
    emailAddress_max            = 40
    localityName                = Locality Name (city, district)
    stateOrProvinceName         = State or Province Name (full name)
    countryName             = Country Name (2 letter code)
    countryName_min             = 2
    countryName_max             = 2
    commonName              = Common Name (hostname, IP, or your name)
    commonName_max              = 64

    # Default values for the above, for consistency and less typing.
    # Variable name             Value
    #------------------------     ------------------------------
    0.organizationName_default      = My Company
    localityName_default            = My Town
    stateOrProvinceName_default     = State or Providence
    countryName_default         = US

    [ v3_ca ]
    basicConstraints            = CA:TRUE
    subjectKeyIdentifier            = hash
    authorityKeyIdentifier          = keyid:always,issuer:always

    [ v3_req ]
    basicConstraints            = CA:FALSE
    subjectKeyIdentifier            = hash


- 3: Open cmd as Admin and type: set OPENSSL_CONF=PATH_TO_YOUR_OPENSSL_CNF_FILE\openssl.cnf


- 4: In same cmd window follow this instruction to generate key and sert: [http-server TLS/SSL](https://www.npmjs.com/package/http-server#tlsssl)
