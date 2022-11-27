import * as React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../images/logo1.png'

export default function SEO(){
return  <Helmet>
<link rel="icon" type="image/png" href={logo} />
<title>
    Maria's Website
</title>

</Helmet>
}