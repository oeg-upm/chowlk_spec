## 2. Specification

This sections gives detailed information about the drawio blocks used to represent the OWL ontological elements normally used in the construction of an ontology. The specification is structured around the three main elements in an ontology: <code>owl:Class</code>, <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>. Each table in the sub-sections contains not only the diagram block but also the equivalent owl code, and a description.

<a name="basic-elements"></a>

### 2.1 Basic Elements

<table style="width:100%">
  <tr>
    <th style="width:30%" style="text-align:center">Diagram BLOCK</th>
    <th style="width:20%">OWL Element</th>
    <th style="width:50%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/class.jpg" alt="Class block"></td>
    <td><code>owl:Class</code></td>
    <td>Block to represent classes within the ontology conceptualization. 
    The content of the block should be accompanied with the prefix and the name of the concept on order to fully identify it.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/unnamed_class.jpg" alt="Unnamed block"></td>
    <td><code>owl:Class</code></td>
    <td>Block to represent an unnamed or anonynoums class. Used to declare a restriction over a named class.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/individual.jpg" alt="Individual block"></td>
    <td><code>owl:Individual</code></td>
    <td>Block to represent individuals</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/object_property.jpg" alt="Object property block"></td>
    <td><code>owl:ObjectProperty</code></td>
    <td>Standard way to represent object properties. Variations can apply to the type of line or the connections style depending on the range or domain specification. For more details see section 2.10.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/subclass.jpg" alt="Sub-class block"></td>
    <td><code>owl:subClassOf</code></td>
    <td>Special arrows to indicate sub-class relationship.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/type.jpg" alt="Sub-class block"></td>
    <td><code>rdf:type</code></td>
    <td>Special arrows to indicate <code>rdf:type</code> relationship.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/datatype_property.jpg" alt="Datatype property block"></td>
    <td><code>owl:DatatypeProperty</code></td>
    <td>Standard way to represent datatype properties attached to a specific <code>owl:Class</code> element. Variations can apply to the type of outer line depending on the domain and range specification. For more details see section 2.11.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/property.jpg" alt="Property block"></td>
    <td><code>owl:ObjectProperty</code><br>
        <code>owl:DatatypeProperty</code>
    </td>
    <td>Alternative option to represent object properties and datatype properties. Mainly used to represent relationships between properties. For more details see section 2.14.</td>
  </tr>


  <tr>
    <td class="first-column"><img src="images/circle.jpg" alt="Circle block"></td>
    <td><code>owl:intersectionOf</code><br>
        <code>owl:unionOf</code><br>
        <code>owl:equivalentClass</code><br>
        <code>owl:disjointWith</code><br>
    </td>
    <td>Block to indicate intersection or union of two or more <code>owl:Class</code> elements. Additionally, it can be used to determine equivalence and disjoint relationships between concepts.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/namespaces.jpg" alt="Namespaces block"></td>
    <td><code>@prefix base: &lt;http://namespace.com#&gt;</code></td>
    <td>Block to indicate all the namespaces used in the ontology. The first namespace is the URI used for the current ontology. It is obligatory to include all the namespaces being used in order to use the ontology converter service.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/metadata.jpg" alt="Metadata block"></td>
    <td><code>owl:AnnotationProperty</code></td>
    <td>Block to indicate the annotations and values describing the ontology. The annotations in use should include the prefix and the annotation name, as indicated in the figure. If custom annotations are utilized, the namespace block should the namespace for those annotation properties.</td>
  </tr>
</table>

<a name="object-properties"></a>

### 2.1 Object Properties

<a name="universal-restrictions-for-object-properties"></a>

### 2.1.1 Universal Restrictions

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/universal_restriction_1.jpg" alt="Universal restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;&emsp;<code>owl:allValuesFrom ns:Class2 ] .</code></td>
    <td>Form 1 of an universal restriction between 2 concepts. <code>Class1</code> is subclass of an anonymus concept which has an object property <code>objectProperty</code>, and all the individuals for this property shall come from <code>Class2</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/universal_restriction_2.jpg" alt="Universal restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;&emsp;<code>owl:allValuesFrom ns:Class2 ] .</code></td>
    <td>Form 2 of an universal restriction between 2 concepts.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/universal_restriction_3.jpg" alt="Universal restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;&emsp;<code>owl:allValuesFrom ns:Class2 ] .</code></td>
    <td>Form 3 of an universal restriction between 2 concepts.</td>
  </tr>
</table>

<a name="existential-restrictions-for-object-properties"></a>

### 2.1.2 Existential Restrictions

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/existential_restriction_1.jpg" alt="Existential restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;&emsp;<code>owl:someValuesFrom ns:Class2 ] .</code></td>
    <td>Form 1 of an existential restriction between 2 concepts. <code>Class1</code> is subclass of an anonymus concept which has an object property <code>objectProperty</code>, and some the individuals for this property shall come from <code>Class2</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/existential_restriction_2.jpg" alt="Existential restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;&emsp;<code>owl:someValuesFrom ns:Class2 ] .</code></td>
    <td>Form 2 of an existential restriction between 2 concepts.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/existential_restriction_3.jpg" alt="Existential restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;&emsp;<code>owl:someValuesFrom ns:Class2 ] .</code></td>
    <td>Form 3 of an existential restriction between 2 concepts.</td>
  </tr>
</table>

<a name="cardinality-restrictions-for-object-properties"></a>

### 2.1.3 Cardinality Restrictions

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/cardinality_restriction_op.jpg" alt="Cardinality restriction block" height="50%"></td>
    <td>
      <code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;<code>owl:minQualifiedCardinality "N1"^^xsd:nonNegativeInteger ;<br></code>
        &emsp;<code>owl:onClass ns:Class2 ] ,<br></code>
        &emsp;<code>[ rdf:type owl:Restriction ;<br></code>
				&emsp;<code>owl:onProperty ns:objectProperty ;<br></code>
				&emsp;<code>owl:maxQualifiedCardinality "N2"^^xsd:nonNegativeInteger ;<br></code>
        &emsp;<code>owl:onClass ns:Class2 ] .</code><br>
    </td>
    <td>Cardinality restriction of a concept on an object property. <code>Class1</code> is subclass of an anonymus concept which has an object property <code>objectProperty</code>, and shall have at least N1 and at most N2 individuals from class <code>Class2</code>. If the N2 element is equal to the letter N, it means <code>owl:maxQualifiedCardinality</code> does not exist.</td>
  </tr>
  </table>

<a name="other-characteristics-of-object-properties"></a>

### 2.1.4 Other Characteristics

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/functional_op_1.jpg" alt="Functional OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:FunctionalProperty .</code>
    </td>
    <td>Form 1 of a functional property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/functional_op_2.jpg" alt="Functional OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:FunctionalProperty .</code>
    </td>
    <td>Form 2 of a functional property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/inverse_functional_op_1.jpg" alt="Inverse Functional OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:InverseFunctionalProperty .</code>
    </td>
    <td>Form 1 of an inverse functional property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/inverse_functional_op_2.jpg" alt="Inverse Functional OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:InverseFunctionalProperty .</code>
    </td>
    <td>Form 2 of an inverse functional property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/symetric_op_1.jpg" alt="Symmetric OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:SymmetricProperty .</code>
    </td>
    <td>Form 1 of a symmetric property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/symetric_op_2.jpg" alt="Symmetric OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:SymmetricProperty .</code>
    </td>
    <td>Form 2 of a symmetric property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/transitive_op_1.jpg" alt="Transitive OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:TransitiveProperty .</code>
    </td>
    <td>Form 1 of a transitive property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/transitive_op_2.jpg" alt="Transitive OP block" height="50%"></td>
    <td>
      <code>ns:objectProperty1 rdf:type owl:ObjectProperty ,<br></code>
        &emsp;&emsp;<code>owl:TransitiveProperty .</code>
    </td>
    <td>Form 2 of a transitive property.</td>
  </tr>
  </table>


<a name="domain-and-range-for-object-properties"></a>

### 2.1.4 Domain and Range

<table style="width:100%">

  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_no_range_op_1.jpg" alt="Domain and Range" height="50%"></td>
    <td><code>ns:objectProperty rdf:type owl:ObjectProperty .</code></td>
    <td>Object property <code>ns:objectProperty</code> without domain and range form 1.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_no_range_op_2.jpg" alt="Domain and Range" height="50%"></td>
    <td><code>ns:objectProperty rdf:type owl:ObjectProperty .</code></td>
    <td>Object property <code>ns:objectProperty</code> without domain and range form 2.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_yes_range_op_1.jpg" alt="Domain and Range" height="50%"></td>
    <td><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:domain ns:Class1 ;<br></code>
        &emsp;&emsp;<code>rdfs:range ns:Class2 .<br></code></td>
    <td>Object property <code>ns:objectProperty</code> with domain and range form 1.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_yes_range_op_2.jpg" alt="Domain and Range" height="50%"></td>
    <td><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:domain ns:Class1 ;<br></code>
        &emsp;&emsp;<code>rdfs:range ns:Class2 .<br></code></td>
    <td>Object property <code>ns:objectProperty</code> with domain and range form 2.</td>

  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_no_range_op.jpg" alt="Domain and Range" height="50%"></td>
    <td><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:domain ns:Class1 .</code></td>
    <td>Object property <code>ns:objectProperty</code> with domain but without range.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_yes_range_op.jpg" alt="Domain and Range" height="50%"></td>
    <td><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:range ns:Class2 .</code></td>
    <td>Object property <code>ns:objectProperty</code> with range but without domain.</td>
  </tr>
  </table>


<a name="datatype-properties"></a>

### 2.2 Datatype Properties

<a name="universal-restrictions-for-datatype-properties"></a>

### 2.2.1 Universal Restrictions

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>
  <tr>
    <td class="first-column"><img src="images/universal_restriction_dp_1.jpg" alt="Universal restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:datatypeProperty1 ;<br></code>
				&emsp;&emsp;<code>owl:allValuesFrom datatype ] .</code>
    </td>
    <td>Form 1 of an universal restriction between a concept and a datatype. <code>Class1</code> is subclass of an anonymus concept which has a datatype property <code>datatypeProperty1</code>, and all the values must be of type <code>datatype</code>.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/universal_restriction_dp_2.jpg" alt="Universal restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:datatypeProperty1 ;<br></code>
				&emsp;&emsp;<code>owl:allValuesFrom datatype ] .</code>
    </td>
    <td>Form 2 of an universal restriction between a concept and a datatype.</td>
  </tr>
</table>

<a name="existential-restrictions-for-datatype-properties"></a>

### 2.2.2 Existential Restrictions

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>
  <tr>
    <td class="first-column"><img src="images/existential_restriction_dp_1.jpg" alt="Existential restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:datatypeProperty1 ;<br></code>
				&emsp;&emsp;<code>owl:someValuesFrom datatype ] .</code>
    </td>
    <td>Form 1 of an existential restriction between a concept and a datatype. <code>Class1</code> is subclass of an anonymus concept which has a datatype property <code>datatypeProperty1</code>, and some values must be of type <code>datatype</code>.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/existential_restriction_dp_2.jpg" alt="Existential restriction block" height="50%"></td>
    <td><code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:datatypeProperty1 ;<br></code>
				&emsp;&emsp;<code>owl:someValuesFrom datatype ] .</code>
    </td>
    <td>Form 2 of an existential restriction between a concept and a datatype.</td>
  </tr>
</table>

<a name="cardinality-restrictions-for-datatype-properties"></a>

### 2.2.3 Cardinality Restrictions

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/cardinality_restriction_dp.jpg" alt="Cardinality restriction block" height="50%"></td>
    <td>
      <code>ns:Class1 rdf:type owl:Class ;<br></code>
        &emsp;&emsp;<code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:datatypeProperty1 ;<br></code>
				&emsp;&emsp;<code>owl:minCardinality "N1"^^xsd:nonNegativeInteger ] ,<br></code>
        &emsp;&emsp;<code>[ rdf:type owl:Restriction ;<br></code>
				&emsp;&emsp;<code>owl:onProperty ns:datatypeProperty1 ;<br></code>
				&emsp;&emsp;<code>owl:maxCardinality "N2"^^xsd:nonNegativeInteger ] .</code><br>
    </td>
    <td>Cardinality restriction of a concept on a datatype property. <code>Class1</code> is subclass of an anonymus concept which has an datatype property <code>datatypeProperty1</code>, and shall have at least N1 and at most N2 values. If the N2 element is equal to the letter N, it means <code>owl:maxCardinality</code> does not exist.</td>
  </tr>
  </table>

<a name="other-characteristics-of-datatype-properties"></a>

### 2.2.4 Other Characteristics

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/functional_dp_1.jpg" alt="Functional DP block" height="50%"></td>
    <td>
      <code>ns:datatypeProperty1 rdf:type owl:DatatypeProperty ,<br></code>
        &emsp;&emsp;<code>owl:FunctionalProperty .</code>
    </td>
    <td>Form 1 of a functional property.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/functional_dp_2.jpg" alt="Functional DP block" height="50%"></td>
    <td>
      <code>ns:datatypeProperty1 rdf:type owl:DatatypeProperty ,<br></code>
        &emsp;&emsp;<code>owl:FunctionalProperty .</code>
    </td>
    <td>Form 2 of a functional property.</td>
  </tr>
</table>


<a name="domain-and-range-for-datatype-properties"></a>

### 2.2.5 Domain and Range

<table style="width:100%">

  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_no_range_dp.jpg" alt="Domain and Range DP" height="50%"></td>
    <td><code>ns:datatypeProperty1 rdf:type owl:DatatypeProperty .</code></td>
    <td>Datatype property <code>ns:datatypeProperty1</code> without domain and range.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_yes_range_dp.jpg" alt="Domain and Range DP" height="50%"></td>
    <td><code>ns:datatypeProperty1 rdf:type owl:DatatypeProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:domain ns:Class1 ;<br></code>
        &emsp;&emsp;<code>rdfs:range datatype .<br></code></td>
    <td>Datatype property <code>ns:datatypeProperty1</code> with domain and range.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_no_range_dp.jpg" alt="Domain and Range DP" height="50%"></td>
    <td><code>ns:datatypeProperty1 rdf:type owl:DatatypeProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:domain ns:Class1 .<br></code></td>
    <td>Datatype property <code>ns:datatypeProperty1</code> with domain and without range.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_yes_range_dp.jpg" alt="Domain and Range DP" height="50%"></td>
    <td><code>ns:datatypeProperty1 rdf:type owl:DatatypeProperty ;<br></code>
        &emsp;&emsp;<code>rdfs:range datatype .<br></code></td>
    <td>Datatype property <code>ns:datatypeProperty1</code> without domain and with range.</td>
  </tr>
</table>

<a name="intersection-and-union-of-concepts"></a>

### 2.3 Intersection and Union of Concepts

<table style="width:100%">

  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>
  
  <tr>
    <td class="first-column"><img src="images/intersection_1.jpg" alt="Intersection" height="50%"></td>
    <td><code>owl:intersectionOf (ns:Class1 ns:Class2)</code></td>
    <td>Intersection of two concepts. Form 1.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/intersection_2.jpg" alt="Intersection" height="50%"></td>
    <td><code>owl:intersectionOf (ns:Class1 ns:Class2)</code></td>
    <td>Intersection of two concepts. Form 2.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/union_1.jpg" alt="Union" height="50%"></td>
    <td><code>owl:unionOf (ns:Class1 ns:Class2)</code></td>
    <td>Union of two concepts. Form 1.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/union_2.jpg" alt="Union" height="50%"></td>
    <td><code>owl:unionOf (ns:Class1 ns:Class2)</code></td>
    <td>Union of two concepts. Form 2.</td>
  </tr>
</table>

<a name="equivalence-and-disjointness-of-concepts"></a>

### 2.4 Equivalence and Disjointness of Concepts

<table style="width:100%">

  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>
  
  <tr>
    <td class="first-column"><img src="images/equivalence_1.jpg" alt="Equivalence" height="50%"></td>
    <td><code>ns:Class1 owl:equivalentClass ns:Class2</code></td>
    <td>Equivalence between two concepts. Form 1.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/equivalence_2.jpg" alt="Equivalence" height="50%"></td>
    <td><code>ns:Class1 owl:equivalentClass ns:Class2</code></td>
    <td>Equivalence between two concepts. Form 2.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/disjoint_with_1.jpg" alt="Disjoint" height="50%"></td>
    <td><code>ns:Class1 owl:disjointWith ns:Class2</code></td>
    <td>Disjointness between two concepts. Form 1.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/disjoint_with_2.jpg" alt="Disjoint" height="50%"></td>
    <td><code>ns:Class1 owl:disjointWith ns:Class2</code></td>
    <td>Disjointness between two concepts. Form 2.</td>
  </tr>
</table>

<a name="relations-between-properties"></a>

### 2.5 Relations between Properties

The following section applies to both type of properties: <code>owl:ObjectProperties</code> and <code>owl:DatatypeProperties</code>. For demonstration purposes we will only use object properties in the examples. It is also indicated if the OWL construct applies to object properties, datatype properties, or both.
<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/subproperty_1.jpg" alt="Subproperty" height="50%"></td>
    <td><code>ns:objectProperty1 rdfs:subPropertyOf ns:objectProperty2</code></td>
    <td>Form 1 of sub-property relationship between two object properties. This construct applies to <code>owl:ObjectProperties</code> and <code>owl:DatatypeProperties</code>.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/subproperty_2.jpg" alt="Subproperty" height="50%"></td>
    <td><code>ns:objectProperty1 rdfs:subPropertyOf ns:objectProperty2</code></td>
    <td>Form 2 of sub-property relationship between two object properties. This construct applies to <code>owl:ObjectProperties</code> and <code>owl:DatatypeProperties</code>.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/equivalent_property_1.jpg" alt="Equivalent Property" height="50%"></td>
    <td><code>ns:objectProperty1</code><br>
    &emsp;&emsp;<code>owl:equivalentProperty ns:objectProperty2</code></td>
    <td>Form 1 of Equivalence relationship between two object properties. This construct applies to <code>owl:ObjectProperties</code> and <code>owl:DatatypeProperties</code>.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/equivalent_property_2.jpg" alt="Equivalent Property" height="50%"></td>
    <td><code>ns:objectProperty1</code><br>
    &emsp;&emsp;<code>owl:equivalentProperty ns:objectProperty2</code></td>
    <td>Form 2 of equivalence relationship between two object properties. This construct applies to <code>owl:ObjectProperties</code> and <code>owl:DatatypeProperties</code>.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/inverse_1.jpg" alt="Inverse" height="50%"></td>
    <td><code>ns:objectProperty1 owl:inverseOf ns:objectProperty2</code></td>
    <td>Form 1 of inverse relationship between two object properties.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/inverse_2.jpg" alt="Inverse" height="50%"></td>
    <td><code>ns:objectProperty1 owl:inverseOf ns:objectProperty2</code></td>
    <td>Form 2 of inverse relationship between two object properties.</td>
  </tr>
</table>

<a name="constructs-for-indiviuals-and-rdf-data"></a>

### 2.6 Constructs for Indiviuals and RDF data

<table style="width:100%">
  <tr>
    <th style="width:25%">Diagram BLOCK</th>
    <th style="width:45%">OWL Element</th>
    <th style="width:30%">Description</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/individual_class_1.jpg" alt="Individual" height="50%"></td>
    <td><code>ns:Individual1 rdf:type ns:Class1 .</code></td>
    <td>Form 1 of Individual type definition.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/individual_class_2.jpg" alt="Individual" height="50%"></td>
    <td><code>ns:Individual1 rdf:type ns:Class1 .</code></td>
    <td>Form 2 of Individual type definition.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/rdf_1.jpg" alt="Individual" height="50%"></td>
    <td><code>ns:Individual1 ns:objectProperty ns:Individual2 .</code></td>
    <td>Association between individuals in RDF graphs.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/rdf_2.jpg" alt="Individual" height="50%"></td>
    <td><code>ns:Individual1 ns:datatypeProperty "value"^^datatype .</code></td>
    <td>Association between individuals and datatype values.</td>
  </tr>
</table>