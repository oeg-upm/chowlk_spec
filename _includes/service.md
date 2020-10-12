## 4. CHOWLK Code Generation Service

The above specification comes together with the <b><a href="https://chowlk.linkeddata.es/">Code Generation Service</a></b> that automatically transform your conceptualization into OWL code, that later can be read by any other ontology editor like <a href="https://protege.stanford.edu/">Protegé</a>. So the use of our specification is two fold, on the one hand it provides you with the resources to construct fine grained conceptualizations of your ontologies and also a way to automatically generate the OWL code of your model.

<b>IMPORTANT NOTE</b><br>
In order to being able to use the service the following aspects of the model must be ensured:
<ul>
    <li>The ontological diagram always should include the namespace block, indicating all the prefixes and namespaces used in the ontology.</li>
    <li>The metadata block must contain the actual annotation property elements, aliases are not allowed. For instance, the user should type <code>owl:versionInfo</code> instead of <code>version</code> to indicate the current version of the ontology.</li>
    <li>The user must ensure that the source and target of all the arrows in the model are connected to a block. This means that in order to represent relationships between object or datatype properties the user should use the <a href="#relations-between-properties">Option 1</a> for these constructs.</li>
</ul>

### 4.1 Adoption

Our visual notation is being used to develop ontologies in the following projects and is part of the suite of tools of the <a href="https://lot.linkeddata.es/">Linked Open Terms</a> methodology.

#### 4.1.1 <a href="https://bimerr.iot.linkeddata.es/" target="_blank">BIMERR</a>

BIMERR is a EU funded project which aims to provide a suite of interoperable tools to support AEC stakeholders throughout the energy efficiency renovation process of existing buildings.

#### 4.1.2 <a href="http://delta.iot.linkeddata.es/" target="_blank">DELTA</a>

DELTA is an EU funded project under Horizon 2020. It proposes a demand-response management platform that introduces scalability and adaptiveness into the Aggregator’s DR toolkits.

#### 4.1.3 <a href="http://vicinity.iot.linkeddata.es/vicinity/" target="_blank">VICINITY</a>

VICINITY is an EU funded project under Horizon 2020. It proposes a platform and ecosystem that provides "interoperability as a service" for infrastructures in the Internet of Things.

#### 4.1.4 <a href="https://oeg-upm.github.io/easytv-onto/OnToology/ontology/core.ttl/documentation/index-en.html" target="_blank">EASYTV</a>

EasyTV is a H2020 European project which main goal is to provide equal access to television and audio-visual services to that all users, especially persons with disabilities and users with special needs.

