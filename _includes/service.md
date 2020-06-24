## 4. CHOWLK Code Generation Service

The above specification comes together with a web service that automatically transform your conceptualization into OWL code, that later can be read by any other ontology editor like <a href="https://protege.stanford.edu/">Protegé</a>. So the use of our specification is two fold, on the one hand it provides you with the resources to construct fine grained conceptualizations of your ontologies and also a way to automatically generate the OWL code of your model. The service is a drag and drop application accessible throught the following <a href="">link</a>.<br>

<b>IMPORTANT NOTE</b><br>
In order to being able to use the service the following aspects of the model must be ensured:
<ul>
    <li>The use of the namespace block, indicating all the prefixes and namespaces used in the ontology. Some namespaces are considered by default, like rdfs or owl. For more details see the <a href="">documentation</a>.</li>
    <li>The metadata block must contain the actual annotation property elements, aliases are not allowed. For instance, the user should type <code>owl:versionInfo</code> instead of <code>version</code> to indicate the current version of the ontology.</li>
    <li>The user must ensure that the source and target of all the arrows in the model are connected to a block. This means that relations between properties are not supported right now by the converter in the form 1, but the user can make use of the form 2.</li>
</ul>