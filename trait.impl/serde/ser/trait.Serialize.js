(function() {var implementors = {
"jf_aead":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_aead/struct.Ciphertext.html\" title=\"struct jf_aead::Ciphertext\">Ciphertext</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_aead/struct.EncKey.html\" title=\"struct jf_aead::EncKey\">EncKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_aead/struct.KeyPair.html\" title=\"struct jf_aead::KeyPair\">KeyPair</a>"]],
"jf_merkle_tree":[["impl&lt;E, H, I, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_merkle_tree/append_only/struct.MerkleTree.html\" title=\"struct jf_merkle_tree::append_only::MerkleTree\">MerkleTree</a>&lt;E, H, I, ARITY, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl&lt;E, H, I, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_merkle_tree/light_weight/struct.LightWeightMerkleTree.html\" title=\"struct jf_merkle_tree::light_weight::LightWeightMerkleTree\">LightWeightMerkleTree</a>&lt;E, H, I, ARITY, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl&lt;E, H, I, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_merkle_tree/universal_merkle_tree/struct.UniversalMerkleTree.html\" title=\"struct jf_merkle_tree::universal_merkle_tree::UniversalMerkleTree\">UniversalMerkleTree</a>&lt;E, H, I, ARITY, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl&lt;E, H, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>, N, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_merkle_tree/namespaced_merkle_tree/struct.NMT.html\" title=\"struct jf_merkle_tree::namespaced_merkle_tree::NMT\">NMT</a>&lt;E, H, ARITY, N, T&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u64.html\">u64</a>, T&gt; + <a class=\"trait\" href=\"jf_merkle_tree/namespaced_merkle_tree/trait.BindNamespace.html\" title=\"trait jf_merkle_tree::namespaced_merkle_tree::BindNamespace\">BindNamespace</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u64.html\">u64</a>, T, N&gt;,\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"jf_merkle_tree/namespaced_merkle_tree/trait.Namespaced.html\" title=\"trait jf_merkle_tree::namespaced_merkle_tree::Namespaced\">Namespaced</a>&lt;Namespace = N&gt; + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a> + CanonicalSerialize + CanonicalDeserialize,\n    N: <a class=\"trait\" href=\"jf_merkle_tree/namespaced_merkle_tree/trait.Namespace.html\" title=\"trait jf_merkle_tree::namespaced_merkle_tree::Namespace\">Namespace</a>,</div>"],["impl&lt;E, I, T, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_merkle_tree/prelude/struct.MerkleProof.html\" title=\"struct jf_merkle_tree::prelude::MerkleProof\">MerkleProof</a>&lt;E, I, T, ARITY&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl&lt;E, I, T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"jf_merkle_tree/prelude/enum.MerkleNode.html\" title=\"enum jf_merkle_tree::prelude::MerkleNode\">MerkleNode</a>&lt;E, I, T&gt;<div class=\"where\">where\n    E: CanonicalSerialize + CanonicalDeserialize + <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a>,\n    I: CanonicalSerialize + CanonicalDeserialize + <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a>,</div>"],["impl&lt;H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_merkle_tree/hasher/struct.HasherNode.html\" title=\"struct jf_merkle_tree::hasher::HasherNode\">HasherNode</a>&lt;H&gt;<div class=\"where\">where\n    H: Digest,</div>"]],
"jf_plonk":[["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;"]],
"jf_utils":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_utils/struct.CanonicalBytes.html\" title=\"struct jf_utils::CanonicalBytes\">CanonicalBytes</a>"]],
"jf_vid":[["impl&lt;E&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_vid/advz/precomputable/struct.PrecomputeData.html\" title=\"struct jf_vid::advz::precomputable::PrecomputeData\">PrecomputeData</a>&lt;E&gt;<div class=\"where\">where\n    E: Pairing,</div>"],["impl&lt;E, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.Common.html\" title=\"struct jf_vid::advz::Common\">Common</a>&lt;E, H&gt;<div class=\"where\">where\n    E: Pairing,\n    H: HasherDigest,</div>"],["impl&lt;E, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.Share.html\" title=\"struct jf_vid::advz::Share\">Share</a>&lt;E, H&gt;<div class=\"where\">where\n    E: Pairing,\n    H: HasherDigest,\n    Output&lt;H&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div>"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.LargeRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::LargeRangeProof\">LargeRangeProof</a>&lt;F&gt;<div class=\"where\">where\n    F: CanonicalSerialize + CanonicalDeserialize,</div>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.SmallRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::SmallRangeProof\">SmallRangeProof</a>&lt;P&gt;<div class=\"where\">where\n    P: CanonicalSerialize + CanonicalDeserialize,</div>"],["impl&lt;V: <a class=\"trait\" href=\"jf_vid/trait.VidScheme.html\" title=\"trait jf_vid::VidScheme\">VidScheme</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_vid/struct.VidDisperse.html\" title=\"struct jf_vid::VidDisperse\">VidDisperse</a>&lt;V&gt;<div class=\"where\">where\n    V::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Share\" title=\"type jf_vid::VidScheme::Share\">Share</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,\n    V::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,\n    V::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" title=\"type jf_vid::VidScheme::Commit\">Commit</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()