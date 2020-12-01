## 4. CHOWLK Code Generation Service

The above specification comes together with the <b><a href="https://chowlk.linkeddata.es/">Code Generation Service</a></b> that automatically transform your conceptualization into OWL code, that later can be read by any other ontology editor like <a href="https://protege.stanford.edu/">Protegé</a>. So the use of our specification is two fold, on the one hand it provides you with the resources to construct fine grained conceptualizations of your ontologies and also a way to automatically generate the OWL code of your model.

<b>IMPORTANT NOTE</b><br>
In order to being able to use the service the following aspects of the model must be ensured:
<ul>
    <li>The ontological diagram always should include the namespace block, indicating all the prefixes and namespaces used in the ontology.</li>
    <li>The metadata block must contain the actual annotation property elements, aliases are not allowed. For instance, the user should type <code>owl:versionInfo</code> instead of <code>version</code> to indicate the current version of the ontology.</li>
    <li>The user must ensure that the source and target of all the arrows in the model are connected to a block. This means that in order to represent relationships between object or datatype properties the user should use the <a href="#relations-between-properties">Option 1</a> for these constructs.</li>
</ul>

