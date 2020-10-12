## 2. Specification

This sections gives detailed information about the diagraming blocks used to represent the OWL  elements used in the construction of an ontology. The specification is structured around the three main elements in an ontology: <code>owl:Class</code>, <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>. Each table in the sub-sections contains not only the diagram block but also the equivalent owl code, and a description of the element.

<a name="basic-elements"></a>

### 2.1 Basic Elements

<table style="width:100%">
  <tr>
    <th style="width:30%" style="text-align:center">Diagram BLOCK</th>
    <th style="width:50%">Description</th>
    <th style="width:20%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/class.svg" alt="Class block"></td>
    <td>Block to represent named and unnamed classes, as well as individual elements within the ontology conceptualization. The content of the block should be accompanied with the prefix and the name of the concept on order to fully identify it.</td>
    <td><code>owl:Class</code><br></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/individual.svg" alt="Class block"></td>
    <td>Block to represent named and unnamed classes, as well as individual elements within the ontology conceptualization. The content of the block should be accompanied with the prefix and the name of the concept on order to fully identify it.</td>
    <td><code>owl:Individual</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/object_property_arrow.svg" alt="Object property block"></td>
    <td>Standard way to represent object properties. Variations can apply to the type of line or the connections style depending on the range or domain specification. For more details see section 2.10.</td>
    <td><code>owl:ObjectProperty</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/subclass_arrow.svg" alt="Sub-class relationship block"></td>
    <td>Special arrow to indicate sub-class relationship between two classes.</td>
    <td><code>owl:subClassOf</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/type_arrow.svg" alt="Type relationship block"></td>
    <td>Special arrow to represent several relationships between elements of this specification. It can be used to indicate <code>rdf:type</code> relationships, or to connect a <code>owl:unionOf</code> axiom with all the concepts it is composed of.</td>
    <td><code>rdf:type</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/datatype_rectangle.svg" alt="Datatype property block"></td>
    <td>Standard way to represent datatype properties attached to a specific <code>owl:Class</code> element. Variations can apply to the type of outer line depending on the domain and range specification. For more details see section 2.11.</td>
    <td><code>owl:DatatypeProperty</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/object_property_diamond.svg" alt="Object property block"></td>
    <td>Alternative way to represent object properties. Mainly used to represent relations between the properties like <code>rdfs:subpropertyOf</code>.</td>
    <td><code>owl:ObjectProperty</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/datatype_property_diamond.svg" alt="Datatype property block"></td>
    <td>Alternative way to represent datatype properties. Mainly used to represent relations between the properties like <code>rdfs:subpropertyOf</code>.</td>
    <td><code>owl:DatatypeProperty</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/namespaces.svg" alt="Namespaces block"></td>
    <td>Block to indicate all the namespaces used in the ontology. The first namespace is the URI used for the current ontology. It is obligatory to include all the namespaces being used in order to use the ontology converter service.</td>
    <td><code>@prefix base: &lt;http://namespace.com#&gt;</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/metadata.svg" alt="Metadata block"></td>
    <td>Block to indicate the annotation properties describing the ontology. The annotations in use should include the prefix and the annotation name, as indicated in the figure. If custom annotations are utilized, the namespace block should include the prefixes and namespaces for those annotation properties.</td>
    <td><code>owl:AnnotationProperty</code></td>
  </tr>
</table>

<a name="classes"></a>

### 2.2 Classes

<a name="class-definition"></a>

### 2.2.1 Class Definition

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>
  
  <tr>
    <td class="first-column"><img src="images/named_class.svg" alt="Named Class"></td>
    <td>Definition for a named class.</td>
    <td rowspan="3"><code>owl:Class</code></td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/unnamed_class_1.svg" alt="Unnamed Class"></td>
    <td>Definition of an unnamed class. Usually used to represent axioms.</td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/unnamed_class_2.svg" alt="Unnamed Class"></td>
    <td>Definition of an unnamed class to represent logical combinations between other classes, such as AND or OR operators</td>
  </tr>


</table>

<a name="sub-class"></a>

### 2.2.2 Sub-Class

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>
  
  <tr>
    <td class="first-column"><img src="images/subclass_1.svg" alt="Subclass"></td>
    <td>Option 1 to express that <code>ns:Class2</code> is sub-class of <code>ns:Class1</code>.</td>
    <td rowspan="2"><code>ns:Class2 owl:subClassOf ns:Class1</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/subclass_2.svg" alt="Subclass"></td>
    <td>Option 2 to express that <code>ns:Class2</code> is sub-class of <code>ns:Class1</code>.</td>
  </tr>
</table>

<a name="equivalent-classes"></a>

### 2.2.3 Equivalent Classes

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>
  
  <tr>
    <td class="first-column"><img src="images/equivalent_1.svg" alt="Equivalence"></td>
    <td>Option 1 for equivalent classes.</td>
    <td rowspan="2"><code>ns:Class1 owl:equivalentClass ns:Class2</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/equivalent_2.svg" alt="Equivalence"></td>
    <td>Option 2 for equivalent classes.</td>
  </tr>
</table>

<a name="disjoint-classes"></a>

### 2.2.4 Disjoint Classes

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/disjoint_1.svg" alt="Disjointness"></td>
    <td>Option 1 for disjointness between classes.</td>
    <td rowspan="2"><code>ns:Class1 owl:disjointWith ns:Class2</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/disjoint_2.svg" alt="Disjointness"></td>
    <td>Option 2 for disjointness between classes.</td>
  </tr>
</table>


<a name="intersection-classes"></a>

### 2.2.5 Intersection of Classes

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>
  
  <tr>
    <td class="first-column"><img src="images/intersection_1.svg" alt="Intersection"></td>
    <td>Option 1 for intersection between classes.</td>
    <td rowspan="2"><code>owl:intersectionOf (ns:Class1 ns:Class2)</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/intersection_2.svg" alt="Intersection"></td>
    <td>Option 2 for intersection between classes.</td>
  </tr>
</table>


<a name="union-classes"></a>

### 2.2.6 Union of Classes

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/union_1.svg" alt="Union"></td>
    <td>Option 1 for union of two concepts.</td>
    <td rowspan="2"><code>owl:unionOf (ns:Class1 ns:Class2)</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/union_2.svg" alt="Union"></td>
    <td>Option 2 for union of two concepts.</td>
  </tr>

</table>


<a name="complement-classes"></a>

### 2.2.7 Complement of Classes

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/complement_of.svg" alt="Complement of"></td>
    <td>Option 1 for complement of two concepts.</td>
    <td><code>owl:complementOf ns:Class1</code></td>
  </tr>
</table>


<a name="object-properties"></a>

### 2.3 Object Properties

<a name="domain-and-range-for-object-properties"></a>

### 2.3.1 Domain and Range

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_no_range_op_1.svg" alt="Domain and Range"></td>
    <td>Option 1 for object property <code>ns:objectProperty</code> without domain and range.</td>
    <td rowspan="2"><code>ns:objectProperty rdf:type owl:ObjectProperty .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_no_range_op_2.svg" alt="Domain and Range"></td>
    <td>Option 2 with object property <code>ns:objectProperty</code> without domain and range.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_yes_range_op_1.svg" alt="Domain and Range"></td>
    <td>Option 1 for object property <code>ns:objectProperty</code> with domain and range.</td>
    <td rowspan="2"><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
    <code>rdfs:domain ns:Class1 ;<br></code>
    <code>rdfs:range ns:Class2 .<br></code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_yes_range_op_2.svg" alt="Domain and Range"></td>
    <td>Option 2 for object property <code>ns:objectProperty</code> with domain and range.</td>

  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_no_range_op_1.svg" alt="Domain and Range"></td>
    <td>Option 1 for object property <code>ns:objectProperty</code> with domain but without range.</td>
    <td rowspan="2"><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
    <code>rdfs:domain ns:Class1 .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_no_range_op_2.svg" alt="Domain and Range"></td>
    <td>Option 2 for object property <code>ns:objectProperty</code> with domain but without range.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_yes_range_op_1.svg" alt="Domain and Range"></td>
    <td>Object property <code>ns:objectProperty</code> with range but without domain.</td>
    <td rowspan="2"><code>ns:objectProperty rdf:type owl:ObjectProperty ;<br></code>
    <code>rdfs:range ns:Class2 .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_yes_range_op_2.svg" alt="Domain and Range"></td>
    <td>Option 2 object property <code>ns:objectProperty</code> with range but without domain.</td>
  </tr>
  </table>

<a name="universal-restrictions-for-object-properties"></a>

### 2.3.2 Universal Restrictions

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/universal_restriction_op_1.svg" alt="Universal restriction block"></td>
    <td>Option 1 for a universal restriction between 2 concepts. <code>ns:Class1</code> is subclass of an anonymus concept which has an object property <code>ns:objectProperty</code>, and all the individuals for this property shall come from <code>ns:Class2</code></td>
    <td rowspan="3"><code>ns:Class1 rdf:type owl:Class ;<br></code>
    <code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
    <code>owl:onProperty ns:objectProperty ;<br></code>
    <code>owl:allValuesFrom ns:Class2 ] .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/universal_restriction_op_2.svg" alt="Universal restriction block"></td>
    <td>Option 2 for a universal restriction with an object property.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/universal_restriction_op_3.svg" alt="Universal restriction block"></td>
    <td>Option 3 for a universal restriction with an object property.</td>
  </tr>
</table>

<a name="existential-restrictions-for-object-properties"></a>

### 2.3.3 Existential Restrictions

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/existential_restriction_op_1.svg" alt="Existential restriction block"></td>
    <td>Option 1 for an existential restriction between 2 concepts. <code>ns:Class1</code> is subclass of an anonymus concept which has an object property <code>ns:objectProperty</code>, and some the individuals for this property shall come from <code>ns:Class2</code></td>
    <td rowspan="3"><code>ns:Class1 rdf:type owl:Class ;<br></code>
    <code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
    <code>owl:onProperty ns:objectProperty ;<br></code>
    <code>owl:someValuesFrom ns:Class2 ] .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/existential_restriction_op_2.svg" alt="Existential restriction block"></td>
    <td>Option 2 of an existential restriction between 2 concepts.</td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/existential_restriction_op_3.svg" alt="Existential restriction block"></td>
    <td>Option 3 of an existential restriction between 2 concepts.</td>
  </tr>
</table>

<a name="cardinality-restrictions-for-object-properties"></a>

### 2.3.4 Cardinality Restrictions

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/cardinality_restriction_op.svg" alt="Cardinality restriction block"></td>
    <td>Cardinality restriction of a concept on an object property. <code>ns:Class1</code> is subclass of an anonymus concept which has an object property <code>ns:objectProperty</code>, and shall have at least N1 and at most N2 individuals from class <code>ns:Class2</code>. If the N2 element is equal to the letter N, it means <code>owl:maxQualifiedCardinality</code> does not exist.</td>
    <td>
    <code>ns:Class1 rdf:type owl:Class ;<br></code>
    <code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
    <code>owl:onProperty ns:objectProperty ;<br></code>
    <code>owl:minQualifiedCardinality "N1"^^xsd:nonNegativeInteger ;<br></code>
    <code>owl:onClass ns:Class2 ] ,<br></code>
    <code>[ rdf:type owl:Restriction ;<br></code>
    <code>owl:onProperty ns:objectProperty ;<br></code>
    <code>owl:maxQualifiedCardinality "N2"^^xsd:nonNegativeInteger ;<br></code>
    <code>owl:onClass ns:Class2 ] .</code><br>
    </td>
  </tr>
  </table>

<a name="functional-object-properties"></a>

### 2.3.5 Functional Properties

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/functional_op_1.svg" alt="Functional OP block"></td>
    <td>Option 1 for functional property.</td>
    <td rowspan="2">
      <code>ns:objectProperty rdf:type owl:ObjectProperty ,<br></code>
      <code>owl:FunctionalProperty .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/functional_op_2.svg" alt="Functional OP block"></td>
    <td>Option 2 for a functional property.</td>
  </tr>
</table>

<a name="inverse-functional-object-properties"></a>

### 2.3.6 Inverse Functional Properties

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/inverse_functional_op_1.svg" alt="Inverse Functional OP block"></td>
    <td>Option 1 for an inverse functional property.</td>
    <td rowspan="2">
      <code>ns:objectProperty rdf:type owl:ObjectProperty ,<br></code>
      <code>owl:InverseFunctionalProperty .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/inverse_functional_op_2.svg" alt="Inverse Functional OP block"></td>
    <td>Option 2 for an inverse functional property.</td>
  </tr>
</table>

<a name="symmetric-object-properties"></a>

### 2.3.7 Symmetric Properties

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/symmetric_op_1.svg" alt="Symmetric OP block"></td>
    <td>Option 1 for a symmetric property.</td>
    <td rowspan="2">
      <code>ns:objectProperty rdf:type owl:ObjectProperty ,<br></code>
      <code>owl:SymmetricProperty .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/symmetric_op_2.svg" alt="Symmetric OP block"></td>
    <td>Option 2 for a symmetric property.</td>
  </tr>
</table>

<a name="transitive-object-properties"></a>

### 2.3.8 Transitive Properties

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/transitive_op_1.svg" alt="Transitive OP block"></td>
    <td>Option 1 for a transitive property.</td>
    <td rowspan="2">
      <code>ns:objectProperty rdf:type owl:ObjectProperty ,<br></code>
      <code>owl:TransitiveProperty .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/transitive_op_2.svg" alt="Transitive OP block"></td>
    <td>Option 2 for a transitive property.</td>
  </tr>
</table>


<a name="datatype-properties"></a>

### 2.4 Datatype Properties

<a name="universal-restrictions-for-datatype-properties"></a>

<a name="domain-and-range-for-datatype-properties"></a>

### 2.4.1 Domain and Range

<table style="width:100%">

  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_no_range_dp.svg" alt="Domain and Range DP"></td>
    <td>Datatype property <code>ns:datatypeProperty</code> without domain and range.</td>
    <td><code>ns:datatypeProperty rdf:type owl:DatatypeProperty .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_yes_range_dp.svg" alt="Domain and Range DP"></td>
    <td>Datatype property <code>ns:datatypeProperty</code> with domain and range.</td>
    <td><code>ns:datatypeProperty rdf:type owl:DatatypeProperty ;<br></code>
    <code>rdfs:domain ns:Class ;<br></code>
    <code>rdfs:range datatype .<br></code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/yes_domain_no_range_dp.svg" alt="Domain and Range DP"></td>
    <td>Datatype property <code>ns:datatypeProperty</code> with domain and without range.</td>
    <td><code>ns:datatypeProperty rdf:type owl:DatatypeProperty ;<br></code>
    <code>rdfs:domain ns:Class .<br></code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/no_domain_yes_range_dp.svg" alt="Domain and Range DP"></td>
    <td>Datatype property <code>ns:datatypeProperty</code> without domain and with range.</td>
    <td><code>ns:datatypeProperty rdf:type owl:DatatypeProperty ;<br></code>
    <code>rdfs:range datatype .<br></code></td>
  </tr>
</table>

### 2.4.2 Universal Restrictions

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>
  <tr>
    <td class="first-column"><img src="images/universal_restriction_dp_1.svg" alt="Universal restriction block"></td>
    <td>Option 1 for an universal restriction between a concept and a datatype. <code>ns:Class</code> is subclass of an anonymus concept which has a datatype property <code>ns:datatypeProperty</code>, and all the values must be of type <code>datatype</code>.</td>
    <td rowspan="2"><code>ns:Class rdf:type owl:Class ;<br></code>
    <code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
    <code>owl:onProperty ns:datatypeProperty ;<br></code>
    <code>owl:allValuesFrom datatype ] .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/universal_restriction_dp_2.svg" alt="Universal restriction block"></td>
    <td>Option 2 for an universal restriction between a concept and a datatype.</td>
  </tr>
</table>

<a name="existential-restrictions-for-datatype-properties"></a>

### 2.4.3 Existential Restrictions

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>
  <tr>
    <td class="first-column"><img src="images/existential_restriction_dp_1.svg" alt="Existential restriction block"></td>
    <td>Option 1 for an existential restriction between a concept and a datatype. <code>ns:Class</code> is subclass of an anonymus concept which has a datatype property <code>ns:datatypeProperty</code>, and some values must be of type <code>datatype</code>.</td>
    <td rowspan="2"><code>ns:Class rdf:type owl:Class ;<br></code>
    <code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
    <code>owl:onProperty ns:datatypeProperty ;<br></code>
    <code>owl:someValuesFrom datatype ] .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/existential_restriction_dp_2.svg" alt="Existential restriction block"></td>
    <td>Option 2 for an existential restriction between a concept and a datatype.</td>
  </tr>
</table>

<a name="cardinality-restrictions-for-datatype-properties"></a>

### 2.4.4 Cardinality Restrictions

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/cardinality_restriction_dp.svg" alt="Cardinality restriction block"></td>
    <td>Cardinality restriction of a concept on a datatype property. <code>ns:Class</code> is subclass of an anonymus concept which has an datatype property <code>ns:datatypeProperty</code>, and shall have at least N1 and at most N2 values. If the N2 element is equal to the letter N, it means <code>owl:maxCardinality</code> does not exist.</td>
    <td>
      <code>ns:Class rdf:type owl:Class ;<br></code>
      <code>rdfs:subClassOf [ rdf:type owl:Restriction ;<br></code>
		  <code>owl:onProperty ns:datatypeProperty ;<br></code>
			<code>owl:minCardinality "N1"^^xsd:nonNegativeInteger ] ,<br></code>
      <code>[ rdf:type owl:Restriction ;<br></code>
			<code>owl:onProperty ns:datatypeProperty ;<br></code>
			<code>owl:maxCardinality "N2"^^xsd:nonNegativeInteger ] .</code><br>
    </td>
  </tr>
  </table>

<a name="functional-datatype-properties"></a>

### 2.4.5 Functional Properties

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/functional_dp_1.svg" alt="Functional DP block"></td>
    <td>Option 1 for a functional property.</td>
    <td rowspan="2">
      <code>ns:datatypeProperty rdf:type owl:DatatypeProperty ,<br></code>
      <code>owl:FunctionalProperty .</code>
    </td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/functional_dp_2.svg" alt="Functional DP block"></td>
    <td>Option 2 for a functional property.</td>
  </tr>
</table>



<a name="relations-between-properties"></a>

### 2.5 Relations between Properties

The following section applies to both type of properties: <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>. For demonstration purposes we will only use object properties in the examples. It is also indicated if the OWL construct applies to object properties, datatype properties, or both.

<a name="sub-property"></a>

### 2.5.1 Sub-Property

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/subproperty_1.svg" alt="Subproperty"></td>
    <td>Option 1 for a sub-property relationship between two object properties. This construct applies to <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>.</td>
    <td rowspan="2"><code>ns:objectProperty1 rdfs:subPropertyOf ns:objectProperty2</code></td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/subproperty_2.svg" alt="Subproperty"></td>
    <td>Option 2 for a sub-property relationship between two object properties. This construct applies to <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>.</td>
  </tr>
</table>

<a name="equivalent-property"></a>

### 2.5.2 Equivalent Property

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/equivalent_property_1.svg" alt="Equivalent Property"></td>
    <td>Option 1 for an equivalence relationship between two object properties. This construct applies to <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>.</td>
    <td rowspan="2"><code>ns:objectProperty1 owl:equivalentProperty ns:objectProperty2</code></td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/equivalent_property_2.svg" alt="Equivalent Property"></td>
    <td>Option 2 for an equivalence relationship between two object properties. This construct applies to <code>owl:ObjectProperty</code> and <code>owl:DatatypeProperty</code>.</td>
  </tr>
</table>

<a name="inverse-property"></a>

### 2.5.3 Inverse Property

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/inverse_property_1.svg" alt="Inverse"></td>
    <td>Option 1 for an inverse relationship between two object properties.</td>
    <td rowspan="2"><code>ns:objectProperty1 owl:inverseOf ns:objectProperty2</code></td>
  </tr>
  <tr>
    <td class="first-column"><img src="images/inverse_property_2.svg" alt="Inverse"></td>
    <td>Option 2 for an inverse relationship between two object properties.</td>
  </tr>
</table>

<a name="individuals"></a>

### 2.6 Individuals

<a name="individuals-class-membership"></a>

### 2.6.1 Class Membership

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/individual_class_1.svg" alt="Individual"></td>
    <td>Option 1 for Individual type definition.</td>
    <td rowspan="2"><code>ns:Individual rdf:type ns:Class .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/individual_class_2.svg" alt="Individual"></td>
    <td>Option 2 for Individual type definition.</td>
  </tr>
</table>

<a name="individuals-property-values"></a>

### 2.6.2 Property Values

<table style="width:100%">
  <tr>
    <th style="width:35%">Diagram BLOCK</th>
    <th style="width:25%">Description</th>
    <th style="width:40%">OWL Element</th>
  </tr>

  <tr>
    <td class="first-column"><img src="images/rdf_1.svg" alt="Individual"></td>
    <td>Association between individuals in RDF graphs.</td>
    <td><code>ns:Individual1 ns:objectProperty ns:Individual2 .</code></td>
  </tr>

  <tr>
    <td class="first-column"><img src="images/rdf_2.svg" alt="Individual"></td>
    <td>Association between individuals and datatype values in RDF graphs.</td>
    <td><code>ns:Individual ns:datatypeProperty "value"^^datatype .</code></td>
  </tr>
</table>