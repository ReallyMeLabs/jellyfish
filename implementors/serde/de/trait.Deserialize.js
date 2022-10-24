(function() {var implementors = {};
implementors["jf_plonk"] = [{"text":"impl&lt;'de, E:&nbsp;PairingEngine&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;","synthetic":false,"types":["jf_plonk::proof_system::structs::Proof"]},{"text":"impl&lt;'de, E:&nbsp;PairingEngine&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;","synthetic":false,"types":["jf_plonk::proof_system::structs::BatchProof"]}];
implementors["jf_primitives"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"jf_primitives/merkle_tree/enum.NodePos.html\" title=\"enum jf_primitives::merkle_tree::NodePos\">NodePos</a>","synthetic":false,"types":["jf_primitives::merkle_tree::NodePos"]},{"text":"impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.MerklePathNode.html\" title=\"struct jf_primitives::merkle_tree::MerklePathNode\">MerklePathNode</a>&lt;F&gt;","synthetic":false,"types":["jf_primitives::merkle_tree::MerklePathNode"]},{"text":"impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.MerklePath.html\" title=\"struct jf_primitives::merkle_tree::MerklePath\">MerklePath</a>&lt;F&gt;","synthetic":false,"types":["jf_primitives::merkle_tree::MerklePath"]},{"text":"impl&lt;'de, F:&nbsp;Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.NodeValue.html\" title=\"struct jf_primitives::merkle_tree::NodeValue\">NodeValue</a>&lt;F&gt;","synthetic":false,"types":["jf_primitives::merkle_tree::NodeValue"]},{"text":"impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.MerkleCommitment.html\" title=\"struct jf_primitives::merkle_tree::MerkleCommitment\">MerkleCommitment</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,&nbsp;</span>","synthetic":false,"types":["jf_primitives::merkle_tree::MerkleCommitment"]},{"text":"impl&lt;'de, F:&nbsp;Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.MerkleLeaf.html\" title=\"struct jf_primitives::merkle_tree::MerkleLeaf\">MerkleLeaf</a>&lt;F&gt;","synthetic":false,"types":["jf_primitives::merkle_tree::MerkleLeaf"]},{"text":"impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.MerkleLeafProof.html\" title=\"struct jf_primitives::merkle_tree::MerkleLeafProof\">MerkleLeafProof</a>&lt;F&gt;","synthetic":false,"types":["jf_primitives::merkle_tree::MerkleLeafProof"]},{"text":"impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"jf_primitives/merkle_tree/enum.MerkleFrontier.html\" title=\"enum jf_primitives::merkle_tree::MerkleFrontier\">MerkleFrontier</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,&nbsp;</span>","synthetic":false,"types":["jf_primitives::merkle_tree::MerkleFrontier"]},{"text":"impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.MerkleTree.html\" title=\"struct jf_primitives::merkle_tree::MerkleTree\">MerkleTree</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,&nbsp;</span>","synthetic":false,"types":["jf_primitives::merkle_tree::MerkleTree"]},{"text":"impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/merkle_tree/struct.AccMemberWitness.html\" title=\"struct jf_primitives::merkle_tree::AccMemberWitness\">AccMemberWitness</a>&lt;F&gt;","synthetic":false,"types":["jf_primitives::merkle_tree::AccMemberWitness"]},{"text":"impl&lt;'de, P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Parameters,&nbsp;</span>","synthetic":false,"types":["jf_primitives::signatures::schnorr::VerKey"]},{"text":"impl&lt;'de, P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Parameters,&nbsp;</span>","synthetic":false,"types":["jf_primitives::signatures::schnorr::KeyPair"]},{"text":"impl&lt;'de, P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Parameters,&nbsp;</span>","synthetic":false,"types":["jf_primitives::signatures::schnorr::Signature"]}];
implementors["jf_utils"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_utils/struct.CanonicalBytes.html\" title=\"struct jf_utils::CanonicalBytes\">CanonicalBytes</a>","synthetic":false,"types":["jf_utils::serialize::CanonicalBytes"]},{"text":"impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"jf_utils/trait.Tagged.html\" title=\"trait jf_utils::Tagged\">Tagged</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"jf_utils/struct.TaggedBlob.html\" title=\"struct jf_utils::TaggedBlob\">TaggedBlob</a>&lt;T&gt;","synthetic":false,"types":["jf_utils::serialize::TaggedBlob"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()